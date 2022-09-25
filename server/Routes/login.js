const express = require("express");
const router = express.Router();
const User = require("../models/registerSchema");
var jwt = require("jsonwebtoken");
const secret = "SUCCESS";
const app = express();
app.use(express.json());
const bcrypt = require("bcrypt");
router.get("/welcome" , async(req, res) =>{
  res.json({data:"hello World"})
})
router.post("/", async (req, res) => {
  try {
    const { userdetails, password } = req.body;
    const userdatausingemail = await User.findOne({ email: userdetails });
    const userdatausingphonnumber = await User.findOne({
      phonenumber: userdetails,
    });
    console.log(userdatausingphonnumber);
    console.log(userdatausingemail);
    let data = userdatausingphonnumber || userdatausingemail;
    console.log(data);
    if (!data) {
      return res.status(200).json({
        status: "failed",
        message: "User is not registerd",
      });
    }
    console.log(password, data.password);
    bcrypt.compare(password, data.password, function (err, result) {
      console.log("inside");
      if (!result) {
        console.log(result, err);
        return res.status(200).json({
          status: "failed",
          message: "wrong password",
        });
      }
      console.log(password, data.password);
      if (result) {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: data._id,
          },
          secret
        );
        console.log(token);
        return res.status(200).json({
          status: "Sucess",
          token: token,
          data,
        });
      }
    });
  } catch (e) {
    res.status(200).json({
      status: "Login failed",
      message: e.message,
    });
  }
});
module.exports = router;