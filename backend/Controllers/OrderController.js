const OrderModel = require("../models/Order");

class OrderController {
  static newOrder = async (req, res) => {
      console.log("===========================");
    try {
      const data = await productModel.create(req.body);
      await data.save();
      res.status(201).send({
        status: "success",
        message: "Product add Successfully 😃🍻",
      });
    } catch (error) {
      res.send(error);
    }
  };

  // Methods after logged in
  static myOrder = async (req, res) => {
    try {
    } catch (error) {
      res.send(error);
    }
  };
  static myAllOrder = async (req, res) => {
    try {
    } catch (error) {
      res.send(error);
    }
  };

  //Admin
  static getAllOrder = async (req, res) => {
    try {
    } catch (error) {
      res.send(error);
    }
  };
  static deleteOrder = async (req, res) => {
    try {
    } catch (error) {
      res.send(error);
    }
  };
}
module.exports = OrderController;
