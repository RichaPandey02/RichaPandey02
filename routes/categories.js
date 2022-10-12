const { Category } = require("../models/category");
const express = require("express");
const router = express.Router();
router.get("/", async (req, res) => {
  const categoryList = await Category.find();
  if (!categoryList) {
    res.status(500).json({ success: false });
  }
  res.send(categoryList);
});

router.post('/', async (req, res)=>{
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color
    })
    category = await Category().save();
    if(!category)
    return res.status(404).send('the category can not be created!!!')
    res.send(category);
})
module.exports = router;