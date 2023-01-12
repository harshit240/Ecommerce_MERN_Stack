const {CheckUserAuth, AuthRoles} = require('../middleware/auth')
const express = require('express');
const UserController = require('../Controllers/USerController');
const ProductController = require('../Controllers/ProductController');
const OrderController = require('../Controllers/OrderController');
const router = express.Router()

//Usercontroller
router.post('/register',UserController.registerUser);
router.post('/verifylogin',UserController.loginUser);
router.get('/logout',UserController.logout);
router.post('/updatePassword',CheckUserAuth,UserController.updatePassword);

//Admin Routes
router.get('/getuserdata',UserController.getAllUSer);
router.get('/admin/getuserdata/:id',UserController.getSingleUser);
router.get('/admin/getuserdata/:id',UserController.getSingleUser);
router.get('/admin/deleteuserdata/:id',UserController.deleteUser);
router.post('/admin/updateuserrole/:id',UserController.changeUserRole);



//ProductController
router.post('/product/create',ProductController.createProduct);
router.get('/product/get',ProductController.getAllProduct);
router.get('/product/get/:id',ProductController.getProductDetail);
router.post('/updateproduct/:id',ProductController.updateProduct);
router.get('/deleteproduct/:id',ProductController.deleteProduct);


//OrderController
router.post('/neworder',OrderController.newOrder);

module.exports = router