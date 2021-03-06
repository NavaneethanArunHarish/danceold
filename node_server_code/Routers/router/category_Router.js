var express = require("express");
var router = express.Router();
var category_controller = require("../../app/Controllers/Category_controller");

router.post("/create_category",category_controller.create_category);
router.put("/update_category",category_controller.update_category);
router.delete("/delete_category/:id",category_controller.delete_category);
router.get("/findbyid_category/:id",category_controller.findbyid_category);
router.get("/getall_category",category_controller.getall_category);
router.post("/find_category_by_businessid",category_controller.findCategoryByBusinessId);

module.exports = router;