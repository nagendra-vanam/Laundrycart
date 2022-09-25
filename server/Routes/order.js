const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
const storeorder = require("../models/orderSchema");
const router = express.Router();
router.get("/", async (req, res) => {
  const orders = await storeorder.find({user:req.body.user});

  res.status(200).json({
    status: "Success",
    orders,
  });
});
router.get("/:id" , async (req, res) =>{
  const vieworders = await storeorder.find({_id:req.params.id})

  res.status(200).json({
    status : "Success" ,
    vieworders
  }) ;
});
router.delete("/:id" , async(req,res)=>{
  await storeorder.findByIdAndDelete(req.params.id)

  res.status(200).json({
    status: "Success" ,
  })
})

router.post("/", async (req, res) => {
  try {
    const order = req.body;
    const date = new Date();
    const n = date.toDateString();
    const time = date.toLocaleTimeString();
    let k = n.split(" ");
    let totalquantity = 0;
    let totalcost = 0;
    const created = (k[1], k[2], k[3], time);

    // let order = {
    //   shirts: {
    //     quantity: 5,
    //     washing: false,
    //     drycleaning: true,
    //     ironing: false,
    //     chemicalcleaning: false,
    //     bill: 10,
    //     subtotal: 50,
    //   },
    //   tshirts: {
    //     quantity: 10,
    //     ironing: true,
    //     washing: true,
    //     drycleaning: true,
    //     chemicalcleaning: true,
    //     bill: 10,
    //     subtotal: 100,
    //   },
    //   jeans: {
    //     quantity: 5,
    //     washing: false,
    //     drycleaning: true,
    //     ironing: false,
    //     chemicalcleaning: true,
    //     bill: 15,
    //     subtotal: 75,
    //   },
    // };
    let arr = [];

    for (let value in order) {
      let subarr = [];
      let appenddata = "";
      if (order[value].quantity) {
        if (order[value].washing) {
          appenddata = appenddata + "washing,";
        }
        if (order[value].ironing) {
          appenddata = appenddata + "ironing,";
        }
        if (order[value].drycleaning) {
          appenddata = appenddata + "drycleaning,";
        }
        if (order[value].chemicalcleaning) {
          appenddata = appenddata + "chemicalcleaning,";
        }
        subarr.push(value);

        subarr.push(appenddata);
        subarr.push(order[value].quantity);
        subarr.push(order[value].bill);
        subarr.push(subarr[2]*subarr[3]);
        arr.push(subarr);
        totalcost = totalcost + subarr[4];
        totalquantity = totalquantity + order[value].quantity;
      }
    }
    const { user, shirts, tshirts, trousers, jeans, boxers, joggers, others } =
      req.body;
    console.log(user);
    console.log(user);
    console.log(totalquantity, totalcost);
    const orders = await storeorder.create({
      washtype: arr,
      user,
      shirts,
      tshirts,
      trousers,
      jeans,
      boxers,
      joggers,
      others,
      totalquantity: totalquantity,
      subtotalcost: totalcost,
      totalcost: totalcost + 90,
      orderdate: created,
      storelocation: "vizag",
      phonenumber: "8753885949",
      user,
    });
    console.log(orders , "112345655zsfzs");
    res.status(200).json({
      status: "Success",
      orders,

    });
  } catch (e) {
    res.json({
      status: "failed",
    });
  }
});

module.exports = router;
