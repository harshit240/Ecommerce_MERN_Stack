const cloudinary = require("cloudinary").v2;
const productModel = require("../models/Product");

cloudinary.config({
  cloud_name: "dqowaxfln",
  api_key: "456697836426261",
  api_secret: "Fnb8mKrkYZrTaeS71e-YpnssgDo",
  secure: true,
});

class ProductController {

  static getAllProduct = async (req, res) => {
    try {
      const getalluser = await productModel.find();
      res.status(200).json({
        status: true,
        getalluser,
      });
    } catch (error) {
      res.send(err);
    }
  };

  static createProduct = async (req, res) => {
    // console.log(req.body);
    try {
      const file = req.files.images; 
      const myCloud = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "productImage",
        width: 150,
      });
      const addProduct = await productModel.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        rating: req.body.rating,
        images: {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        },
        category: req.body.category,
      });
      await addProduct.save();
      res.status(200).json({
        success: true,
        addProduct,
      });
      // const data = await productModel.create(req.body);
      // res.status(201).send({
      //   status: "success",
      //   message: "Product add Successfully 😃🍻",
      // });
    } catch (error) {
      // res.send(error)
      console.log(error);
    }
  };

  static getProductDetail = async (req, res) => {
    try {
      const data = await productModel.findById(req.params.id);
      console.log(data);
      if (!data) {
        res.status(500).json({
          success: false,
          message: "failed",
        });
      }
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      res.send(err);
    }
  };
  
  static getAdminProduct = async (req, res) => {
    try {
      const data = await productModel.find();
      // console.log(data);
      if (!data) {
        res.status(401).json({
          success: false,
          message: "failed",
        });
      }
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      res.send(err);
    }
  };
  
  static updateProduct = async (req, res) => {
    try {
      // console.log(req.body)
      const product = await productModel.findById(req.params.id);
      // console.log(product);
      const image_id = product.images.public_id;
      console.log(image_id);
      await cloudinary.uploader.destroy(image_id);
      const file = req.files.images;
      const myCloud = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "productImage",
        width: 150,
      });
      const updateproduct = await productModel.findByIdAndUpdate(req.user.id, {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        rating: req.body.rating,
        images: {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        },
        category: req.body.category,
      });
      console.log("3");

      res.status(200).json({
        success: true,
        updateproduct,
      });
    } catch (error) {
      res.send(error);
      // console.log(error);
    }
  };

  static deleteProduct = async (req, res) => {
    try {
      const productdelete = await productModel.findById(req.params.id);
      console.log(productdelete);
      const image_id = productdelete.images.public_id;
      console.log(image_id);
      console.log(productdelete.images.public_id);
      
      if (!productdelete) {
        return res
          .status(200)
          .send({ status: "500", message: "user not !! found 😪 " });
      }
      const imageid = productdelete.images.public_id;
      // console.log(imageid);
      await cloudinary.uploader.destroy(imageid);

      await productModel.remove(productdelete);
      res
        .status(200)
        .send({
          status: "deleted successfully",
          message: "  Successfully product deleted 🥂🍻",
        });
    } catch (error) {
      res.send(error);
    }
  };
                                 
}

module.exports = ProductController;
