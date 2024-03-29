const {CheckUserAuth, AuthRoles} = require('../middleware/auth')
const express = require('express');
const router = express.Router()
const ProductController = require('../Controllers/ProductController');
const OrderController = require('../Controllers/OrderController');
const UserController = require('../Controllers/UserController');
const PaymentController = require('../Controllers/PayementController');

//Usercontroller
router.post('/register',UserController.registerUser);
router.post('/verifylogin',UserController.loginUser);
router.get('/logout',UserController.logout);
router.post('/updatePassword',CheckUserAuth,UserController.updatePassword);

//Admin Routes
router.get('/getuserdata',UserController.getAllUSer);
router.get('/getuserdata/:id',UserController.getuser);
router.get('/admin/getuserdata/:id',UserController.getSingleUser);
router.post('/updateprofile',CheckUserAuth,UserController.updateProfile);
router.post('/admin/deleteuserdata/:id',UserController.deleteUser);
router.post('/admin/updateuserrole/:id',UserController.changeUserRole);
router.get('/me',CheckUserAuth,UserController.getuserdetail);



//ProductController
router.post('/product/create',ProductController.createProduct);
router.get('/product',ProductController.getAllProduct);
router.post('/create/category',ProductController.createCategoryProduct);
router.get('/categoryproduct',ProductController.getCategoryProduct);
router.get('/getProductDetail/:id',ProductController.getProductDetail);
router.post('/updateproduct/:id',ProductController.updateProduct);
router.get('/deleteproduct/:id',ProductController.deleteProduct);


//OrderController
router.post('/neworder',OrderController.newOrder);
router.get('/orders/me',OrderController.myOrder);


//PaymentController
router.post('/payment/process',CheckUserAuth,PaymentController.processPayment)
router.get('/stripeapikey',CheckUserAuth,PaymentController.sendStripeApiKey)

module.exports = router