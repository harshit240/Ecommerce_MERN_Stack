const {CheckUserAuth, AuthRoles} = require('../middleware/auth')
const express = require('express');
const router = express.Router()
const UserController = require('../Controllers/USerController');
const ProductController = require('../Controllers/ProductController');
const OrderController = require('../Controllers/OrderController');

//Usercontroller
router.post('/register',UserController.registerUser);
router.post('/verifylogin',UserController.loginUser);
router.get('/logout',UserController.logout);
router.post('/updatePassword',CheckUserAuth,UserController.updatePassword);

//Admin Routes
router.get('/getuserdata',UserController.getAllUSer);
router.get('/getuserdata/:id',UserController.getuser);
router.get('/admin/getuserdata/:id',UserController.getSingleUser);
router.post('/updateprofile/:id',UserController.updateProfile);
router.post('/admin/deleteuserdata/:id',UserController.deleteUser);
router.post('/admin/updateuserrole/:id',UserController.changeUserRole);
router.get('/me',CheckUserAuth,UserController.getuserdetail);



//ProductController
router.post('/product/create',ProductController.createProduct);
router.get('/product',ProductController.getAllProduct);
router.post('/product/createCategoryProduct',ProductController.createCategoryProduct);
router.get('/categoryproduct',ProductController.getCategoryProduct);
router.get('/getProductDetail/:id',ProductController.getProductDetail);
router.post('/updateproduct/:id',ProductController.updateProduct);
router.get('/deleteproduct/:id',ProductController.deleteProduct);


//OrderController
router.post('/neworder',OrderController.newOrder);

module.exports = router