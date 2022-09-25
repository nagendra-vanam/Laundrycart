const { response } = require("express");
const express = require("express");
const app = express();
const router = express.Router();
const registerSchema = require("../models/registerSchema");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
//user registration
router.get("/", async (req, res) => {
  try {
    const data = await registerSchema.find();
    res.json({
      message: "success",
      data,
    });
  } catch (e) {
    res.json({
      message: e.message,
    });
  }
});
router.get("/username" , async(req,res)=>{
   const data = await registerSchema.find({_id:req.body.user})
   res.json({
    data
   })
   console.log(data);
})
router.post(
  "/",
  // body("email").isEmail(),
  // body("password").isLength({
  //   min: 6,
  //   max: 18,
  // }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { phonenumber, email, password } = req.body;
      const existeduser = await registerSchema.findOne({ email });
      const number = await registerSchema.findOne({ phonenumber });
      // if (existeduser&&number) {
      //   return res.status(400).json({
      //     status: "registration failed",
      //     message: "email already used",
      //   });
      // }
      // console.log(existeduser);
      if (existeduser) {
        return res.status(201).json({
          status: "failed",
          message: "Email already used",
        });
      }
      if (number) {
        return res.status(201).json({
          status: "failed",
          message: "Phonenumber already used",
        });
      }
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          return res.status(201).json({
            status: "failed",
          });
        }
        // console.log(hash);
        const users = await registerSchema.create({
          ...req.body,
          password: hash,
        });
        res.status(201).json({
          status: "success",
          users,
        });
      });
    } catch (e) {
      res.json({
        message: e.message,
      });
    }
  }
);
module.exports = router;