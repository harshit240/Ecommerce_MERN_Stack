const OrderModel = require("../models/Order");

class OrderController {
  static newOrder = async (req, res) => {
      // console.log("===========================");
    try {
      const data = await OrderModel.create(req.body);
      await data.save();
      res.status(201).json({
        status: "success",
        message: "Order added Successfully 😃🍻",
      });
    } catch (error) {
      console.log(error);
    }
  };
  static getSingleOrder = async (req, res) => {
    try {
      const data = await OrderModel.findById(req.params.id);
      await data.save();
      res.status(200).json({
        status: true,
        data
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Methods after logged in
  static myOrder = async (req, res) => {
    try {
      const data = await OrderModel.find();
      res.status(200).json({
        status: true,
        data
      });
    } catch (error) {
      console.log(error);
    }
  };
  static myAllOrder = async (req, res) => {
    try {

    } catch (error) {
      console.log(error);
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
