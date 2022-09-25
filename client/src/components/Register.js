import React, { useState } from "react";
import Header from "./Header";
import Footer from "./FOOTER/footer";
import Endfooter from "./FOOTER/Endfooter";
import Scheme from "./Scheme";
import "./Body.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
function Register() {
  const navigate = useNavigate();
  const [form, setform] = useState("");
  const [check, updatedcheck] = useState(false);
  const [response, setResponse] = useState("");
  const handlecheck = () => {
    updatedcheck(!check);
  };
  const submitData = async (e) => {
    e.preventDefault();
    console.log(check);
    if (!check) {
      return alert("accept terms and conditions");
    }
    // console.log(form);
    const datain = await axios.post(
      "http://localhost:8080/register",
      form
      // method: "POST",
      // headers: {
      //   Accept: "application/json",
      //   "Content-Type": "application/json",
      // },
      // body: form,
    );
    // .then((data) => data.json())
    // .then((response) => setResponse(response))
    // .catch((response) => setResponse(response));
    if (datain.data.status == "failed") {
      setform({
        ...form,
        name: "",
        phonenumber: "",
        email: "",
        address: "",
        password: "",
        pincode: "",
        state: "",
        district: "",
      });
      return alert(datain.data.message);
    } else {
      alert("registered succesfully");
      navigate("/");
    }
    // } else {
    //   alert("something went wrong ");
    // }
  };
  return (
    <div className="secondregisterpage">
      <Header />
      <div className="registermaincontent">
        <div className="registerleftmain">
          <div className="registerleftcontent">
            <h2 className="registerheadingsecond">Laundry Service</h2>
            <p className="registerdescriptionone">
              Doorstep Wash and Dryclean Service
            </p>
            <p className="registerhaveaccountone">Already Have Account</p>
            <Link to="/">
              <button className="registerlogin-button">Sign In</button>
            </Link>
          </div>
        </div>
        <div className="registerrightmain">
          <div className="registerrightcontent">
            <h2 className="registerheadingthird">REGISTER</h2>
            <form
              className="registrationform"
              method="POST"
              required
              onSubmit={submitData}
            >
              <div className="registrationinputs">
                <div className="registerleftinputs">
                  <label className="registerlabel">Name</label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={(e) => setform({ ...form, name: e.target.value })}
                  />
                  <br />
                  <label className="registerlabel">Phone</label>
                  <br />
                  <input
                    name="phonenumber"
                    value={form.phonenumber}
                    required
                    onChange={(e) =>
                      setform({ ...form, phonenumber: e.target.value })
                    }
                  />
                  <p
                    style={{
                      color: "red",
                      margin: "-22px",
                      fontSize: "12px",
                      marginLeft: "170px",
                    }}
                  >
                    {/* {response.response.data.numbermessage} */}
                  </p>
                  <br />
                  <label className="registerlabel">District</label>
                  <br />
                  <input
                    type="text"
                    name="district"
                    required
                    value={form.district}
                    onChange={(e) =>
                      setform({ ...form, district: e.target.value })
                    }
                  />
                  <br />
                  <label className="registerlabel">Pincode</label>
                  <br />
                  <input
                    name="pincode"
                    value={form.pincode}
                    required
                    onChange={(e) =>
                      setform({ ...form, pincode: e.target.value })
                    }
                  />
                </div>
                <div className="registerrightinputs">
                  <label className="registerlabel">Email</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    required
                    onChange={(e) =>
                      setform({ ...form, email: e.target.value })
                    }
                  />
                  <p
                    style={{
                      color: "red",
                      margin: "-22px",
                      fontSize: "12px",
                      marginLeft: "200px",
                    }}
                  >
                    {/* {response.response.data.emailmessage} */}
                  </p>
                  <br />
                  <label className="registerlabel">State</label>
                  <br />
                  <input
                    type="text"
                    name="state"
                    required
                    value={form.state}
                    onChange={(e) =>
                      setform({ ...form, state: e.target.value })
                    }
                  />
                  <br />
                  <label className="registerlabel">Address</label>
                  <br />
                  <input
                    type="text"
                    name="address"
                    required
                    value={form.address}
                    onChange={(e) =>
                      setform({ ...form, address: e.target.value })
                    }
                  />
                  <br />
                  <label className="registerlabel">Password</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    required
                    onChange={(e) =>
                      setform({ ...form, password: e.target.value })
                    }
                  />
                  <br />
                </div>
              </div>
              <div className="registercheck-box">
                <input
                  type="checkbox"
                  className="registercheckboxtext"
                  onChange={handlecheck}
                  value={check}
                />
                <span>
                  {" "}
                  I agree to Terms & Condition receiving marketing and
                  promotional materials
                </span>
              </div>
              <button type="submit" className="registersignupbutton">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <Scheme />
      <Footer />
      <Endfooter />
    </div>
  );
}
export default Register;
