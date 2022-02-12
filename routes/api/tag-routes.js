const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      
      include: [{ model: Product, through: ProductTag}]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      
      include: [{ model: Product, through: ProductTag }]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No Tag data found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  /* req.body should look like this...
    {
      "tag_name": "rock music",
		  "productIds": [1,2,3,4]
	  }
  // */

  // try {
  //   const tagData = await Tag.create(req.body);
  //   console.log(tagData)
  //   if (req.body.product_tag.length) {
  //     const productProductIdArr = req.body.product_tag.map((product_id) => {
  //       return {
  //         tag_id: tagData.id,
  //         product_id,
  //       };
  //     });
  //     console.log(productProductIdArr)
  //     return ProductTag.bulkCreate(productProductIdArr);
  //   }

  //   res.status(200).json(tagData);
  // } catch (err) {
  //   res.status(400).json(err);
  // }

  Tag.create(req.body)
    .then((tag) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.productIds.length) {
        const tagProductIdArr = req.body.productIds.map((product_id) => {
          return {
            product_id,
            tag_id: tag.id,
          };
        });
        return ProductTag.bulkCreate(tagProductIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(tag);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  /* req.body should look like this...
    {
    "tag_name": "rock music product",
    "productIds": [1,2,3]
    } 
  */
    Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((tag) => {
        // find all associated tags from ProductTag
        return ProductTag.findAll({ where: { tag_id: req.params.id } });
      })
      .then((productTags) => {
        // get list of current product_ids
        const productTagIds = productTags.map(({ product_id }) => product_id);
        // create filtered list of new tag_ids
        const newProductTags = req.body.productIds
          .filter((product_id) => !productTagIds.includes(product_id))
          .map((product_id) => {
            return {
              product_id,
              tag_id: req.params.id,
            };
          });
        // figure out which ones to remove
        const productTagsToRemove = productTags
          .filter(({ product_id }) => !req.body.productIds.includes(product_id))
          .map(({ id }) => id);
  
        // run both actions
        return Promise.all([
          ProductTag.destroy({ where: { id: productTagsToRemove } }),
          ProductTag.bulkCreate(newProductTags),
        ]);
      })
      .then((updatedProductTags) => res.json(updatedProductTags))
      .catch((err) => {
        // console.log(err);
        res.status(400).json(err);
      });
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'No Tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
