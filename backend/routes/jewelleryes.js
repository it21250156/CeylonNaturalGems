const express = require('express')
const upload = require("../utils/multer");
const {
  getJewelleryes, 
  getJewellery, 
  createJewellery, 
  deleteJewellery, 
  updateJewellery,
 
} = require('../controllers/jewelleryController')
// const { default: JewelleryAdminReports } = require('../../frontend/src/pages/JewelleryAdminReport')

const router = express.Router()

// GET all jewellery
router.get('/', getJewelleryes)



// GET a single jewellery
router.get('/:id', getJewellery)

// POST a new jewellery
router.post('/', upload.single("image"), createJewellery)

// DELETE a jewellery
router.delete('/:id', deleteJewellery)

// UPDATE a jewellery
router.patch('/:id', upload.single("image"), updateJewellery)

//router.param('/id' ,JewelleryAdminReport)

module.exports = router