import React from "react";
import { useState } from "react";
import "./SumarryPage.css";

import GsumOrderRow from "./GsumOrderRow";
import tickpic from "../images/tick.png";

export default function SumarryPage({
  GcancelSummary,
  gOrderdata,
  GconfirmOrderSum,
}) {
  const totalitems7 =
    gOrderdata.shirts.quantity *
    (gOrderdata.shirts.washing +
      gOrderdata.shirts.ironing +
      gOrderdata.shirts.drycleaning +
      gOrderdata.shirts.chemicalcleaning);
  const totalitems1 =
    gOrderdata.tshirts.quantity *
    (gOrderdata.tshirts.washing +
      gOrderdata.tshirts.ironing +
      gOrderdata.tshirts.drycleaning +
      gOrderdata.tshirts.chemicalcleaning);
  const totalitems2 =
    gOrderdata.trousers.quantity *
    (gOrderdata.trousers.washing +
      gOrderdata.trousers.ironing +
      gOrderdata.trousers.drycleaning +
      gOrderdata.trousers.chemicalcleaning);
  const totalitems3 =
    gOrderdata.jeans.quantity *
    (gOrderdata.jeans.washing +
      gOrderdata.jeans.ironing +
      gOrderdata.jeans.drycleaning +
      gOrderdata.jeans.chemicalcleaning);
  const totalitems4 =
    gOrderdata.boxers.quantity *
    (gOrderdata.boxers.washing +
      gOrderdata.boxers.ironing +
      gOrderdata.boxers.drycleaning +
      gOrderdata.boxers.chemicalcleaning);
  const totalitems5 =
    gOrderdata.joggers.quantity *
    (gOrderdata.joggers.washing +
      gOrderdata.joggers.ironing +
      gOrderdata.joggers.drycleaning +
      gOrderdata.joggers.chemicalcleaning);
  const totalitems6 =
    gOrderdata.others.quantity *
    (gOrderdata.others.washing +
      gOrderdata.others.ironing +
      gOrderdata.others.drycleaning +
      gOrderdata.others.chemicalcleaning);
  const totalprice =
    5 *
    (totalitems1 +
      totalitems7 +
      totalitems2 +
      totalitems3 +
      totalitems4 +
      totalitems5 +
      totalitems6);

  console.log("totalprice", totalprice);

  const [openModel, setOpenModel] = useState(false);
  // console.log( "gOrderdata",gOrderdata)
  return (
    <div className="gorderPrvSummary">
      <div className="gHeader1Osum">
        <span>Summary page</span>
        <span className="gbuttonOsumcloseCont">
          <button className="gbuttonOsumclose" onClick={() => GcancelSummary()}>
            X
          </button>
        </span>
      </div>
      <div className="goderSummaryheader2">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col" style={{color:"black"}}>store Location</th>
              <th scope="col" style={{color:"black"}}>Store Address</th>
              <th scope="col" style={{color:"black"}}>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vizag</td>
              <td>Jp Nagar</td>
              <td>9849098490</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="gorderSummaryHeader3">
        Orders details :
        <div className="gordersumTable">
          <table className="table table-hover  ">
            <tbody>
              {gOrderdata.shirts.quantity != 0 && (
                <GsumOrderRow
                  elementtype={"shirts"}
                  elementInfo={gOrderdata.shirts}
                />
              )}
              {gOrderdata.tshirts.quantity != 0 && (
                <GsumOrderRow
                  elementtype={"tshirts"}
                  elementInfo={gOrderdata.tshirts}
                />
              )}
              {gOrderdata.trousers.quantity != 0 && (
                <GsumOrderRow
                  elementtype={"trousers"}
                  elementInfo={gOrderdata.trousers}
                />
              )}
              {gOrderdata.jeans.quantity != 0 && (
                <GsumOrderRow
                  elementtype={"jeans"}
                  elementInfo={gOrderdata.jeans}
                />
              )}
              {gOrderdata.boxers.quantity != 0 && (
                <GsumOrderRow
                  elementtype={"boxers"}
                  elementInfo={gOrderdata.boxers}
                />
              )}
              {gOrderdata.joggers.quantity != 0 && (
                <GsumOrderRow
                  elementtype={"joggers"}
                  elementInfo={gOrderdata.joggers}
                />
              )}
              {gOrderdata.others.quantity != 0 && (
                <GsumOrderRow
                  elementtype={"others"}
                  elementInfo={gOrderdata.others}
                />
              )}
              <tr>
                <td></td>
                <td></td>
                <td>Subtotal:</td>
                <td>{totalprice}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Pickup Charges:</td>
                <td>90</td>
              </tr>
              <tr className="GeditedRow">
                <td></td>
                <td></td>
                <td>Total:</td>
                <td>{totalprice + 90}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ fontSize: "12px", color: "#3B3737" }}>Address</div>
        <div className="GprevsumaddressCont">
          <div className="Gprevsumaddressmain">
            <div className="homeclassse">
              <b>Home</b>
              <div>
                <img className="tickimage" src={tickpic} alt="selected" />
              </div>
            </div>
            <div>1-264, 5th street, Hyd, Telangana</div>
          </div>
          <div className="Gprevsumaddress">
            <div>
              <b>other</b>
            </div>
            <div>1-56,6th street ,vizag,Andhra</div>
          </div>
          <div className="GaddNewAddress">
            <div>
              <b>Add new</b>
            </div>
          </div>
        </div>
      </div>
      <div className="GoviConfirmButton">
        {totalprice != 0 && (
          <button
            className="GbuttonforOrder"
            onClick={() => GconfirmOrderSum()}
          >
            Confirm
          </button>
        )}
      </div>
    </div>
  );
}
