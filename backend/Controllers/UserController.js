const userModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dqowaxfln",
  api_key: "456697836426261",
  api_secret: "Fnb8mKrkYZrTaeS71e-YpnssgDo",
  secure: true,
});

class UserController {

  static registerUser = async (req, res) => {
    try {
      // console.log(req.body);
      const { name, email, password, confirm_password, avatar } = req.body;
      const admin = await userModel.findOne({ email: email });

      if (admin) {
        res.status(404).json({
          status: "failed",
          message: "ᴛʜɪꜱ ᴇᴍᴀɪʟ ɪꜱ ᴀʟʀᴇᴀᴅʏ ᴇxɪᴛꜱ😓",
        });
      } else {
        if (name && email && password && confirm_password) {
          if (password === confirm_password) {
            try {
              const imagefile = req.files.avatar;
              // console.log(imagefile);
              const image_upload = await cloudinary.uploader.upload(
                imagefile.tempFilePath,
                {
                  folder: "Ecommerce_Mern",
                  width: 400,
                }
              );
              const pass = password.toString();
              const hashpassword = await bcrypt.hash(pass, 10);
              const result = await userModel({
                name: name,
                email: email,
                password: hashpassword,
                avatar: {
                  public_id: image_upload.public_id,
                  url: image_upload.secure_url,
                },
              });
              await result.save();
              res.status(201).json({
                status: "success",
                message: "Registration Successfully 😃🍻",
              });
            } catch (err) {
              console.log(err);
            }
          } else {
            res.status(404).json({
              status: "failed",
              message: "Password and confirm password does not match 😓",
            });
          }
        } else {
          res.status(404).json({ status: "failed", message: "All Fields are required 😓" });
        }
      }
    } catch (error) {
      console.log(error)
    }
  };

  static loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      // console.log(req.body)
      if (email && password) {
        const user = await userModel.findOne({ email: email });
        // console.log(user.password);
        if (user != null) {
          const isMatched = await bcrypt.compare(password, user.password);
          if (user.email === email && isMatched) {
            //verfiy token
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);
            // console.log(token);
            res.cookie("token", token);
            res.status(201).json({
              status: "success",
              message: "login successfully with web token 😃🍻",
              Token: token,
              user
            });
          } else {
            res.status(404).json({
              status: "failed",
              message: "Email or Password is not Valid 😓",
            });
          }
        } else {
          res.status(404).json({
            status: "failed",
            message: "You are not registered user 😓",
          });
        }
      } else {
        res.status(404).json({ status: "failed", message: "All Fiels are required 😓" });
      }
    } catch (error) {
      console.log(error)
    }
  };

  static logout = async (req, res) => {
    try {
      res.clearCookie("token");
      res.status(202).json({ status: "success", message: "Logout successfull 😃🍻" });
    } catch (error) {
      console.log(error)
    }
  };

  static getAllUSer = async (req, res) => {
    try {
      const getalluser = await userModel.find();
      res.status(200).json(
        { getalluser },
      );
    } catch (error) {
      console.log(error)
    }
  };

  static getuser = async (req, res) => {
    try {
      const getUser = await userModel.findById(req.params.id);
      res.status(200).json(
        { getUser },
      );
    } catch (error) {
      console.log(error)
    }
  };

  static updateProfile = async (req, res) => {
    try {
     
      if (req.files) {
        const user = await userModel.findById(req.user.id)

        const imageId = user.avatar.public_id
        // console.log(imageId)
        await cloudinary.uploader.destroy(imageId)
        const file = req.files.avatar
        // console.log(file)
        const myCloud = await cloudinary.uploader.upload(file.tempFilePath, {
          folder: 'Ecommerce_Mern',
          width: 150,
          crop: "scale",
        })
        var data = {
          name: req.body.name,
          email: req.body.email,
          avatar: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          },
        };
      } else {
        var data = {
          name: req.body.name,
          email: req.body.email,
        };
      }
      const result = await userModel.findByIdAndUpdate(req.user.id, data)
      // await result.save()
      res.status(201).json({ 
        status: "success",
        message: "User Profile updated Successfully 😃🍻", 
        result 
      });

    } catch (err) {
      console.log(err);
    }
  }


  static updatePassword = async (req, res) => {
    try {
      const { oldPassword, newPassword, confirmPassword } = req.body
      // console.log(req.body);
      if (oldPassword && newPassword && confirmPassword) {
        const user = await userModel.findById(req.user.id).select("+password");
        const isMatch = await bcrypt.compare(oldPassword, user.password)
        //const isPasswordMatched = await userModel.comparePassword(req.body.oldPassword);
        if (!isMatch) {
          res.status(404).json({ "status": 400, "message": "Old password is incorrect" })
        } else {
          if (newPassword !== confirmPassword) {
            res.status(404).json({ "status": "failed", "message": "password does not match" })
          } else {
            const salt = await bcrypt.genSalt(10)
            const newHashPassword = await bcrypt.hash(newPassword, salt)
            //console.log(req.user)
            await userModel.findByIdAndUpdate(req.user.id, { $set: { password: newHashPassword } })
            res.status(202).json({
              status: "success",
              message: "Password changed succesfully 😃🍻",
            });
          }
        }

      } else {
        res.status(404).json({ "status": "failed", "message": "All Fields are Required" })
      }
    } catch (error) {
      console.log(error)
    }
  }

  static getSingleUser = async (req, res) => {
    try {
      const data = await userModel.findById(req.params.id);
      // console.log(data);
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error)
    }
  }

  static deleteUser = async (req, res) => {
    try {
      const data = await userModel.findByIdAndDelete(req.params.id);
      // console.log(data);
      if (!data) {
        res.status(500).json({
          success: false,
          message: "failed",
        });
      }
      res.status(202).json({
        status: "Success",
        message: "Delete User Successfully!",
      });
    } catch (error) {
      console.log(error)
    }
  }

  static changeUserRole = async (req, res) => {
    try {

    } catch (error) {

    }
  }

  static getuserdetail = async (req, res) => {
    try {
      // console.log(req.user);
      const user = await userModel.findById(req.user.id);
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      console.log(error);
    }
  };

}

module.exports = UserController;
