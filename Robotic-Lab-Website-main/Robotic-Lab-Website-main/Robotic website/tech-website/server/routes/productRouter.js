const router = require("express").Router();
const blogCtrl = require("../controllers/productCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

router
  .route("/products")
  .get(blogCtrl.getProducts)
  .post(auth, authAdmin, blogCtrl.createProduct);

router
  .route("/products/:id")
  .delete(auth, authAdmin, blogCtrl.deleteProduct)
  .put(auth, authAdmin, blogCtrl.updateProduct);
//auth, authAdmin,

module.exports = router;
