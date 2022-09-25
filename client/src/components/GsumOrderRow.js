import { react } from "react";
const GsumOrderRow = ({ elementInfo, elementtype }) => {
  //console.log(elementInfo, elementtype);
  if (elementInfo.quantity == 0) {
    return;
  } else {
    return (
      <tr>
        <td>{elementtype}</td>
        <td>
          <span>{elementInfo.washing && "washing,"}</span>
          <span>{elementInfo.ironing && "ironing,"}</span>
          <span>{elementInfo.drycleaning && "drycleaning,"}</span>
          <span>{elementInfo.chemicalcleaning && "chemicalcleaning,"}</span>
        </td>
        <td>
          <span>{elementInfo.quantity}</span>
          <span> X </span>
          <span>
            {5 *
              (elementInfo.washing +
                elementInfo.ironing +
                elementInfo.drycleaning +
                elementInfo.chemicalcleaning)}{" "}
            =
          </span>
        </td>
        <td>
          <span>
            {elementInfo.quantity *
              5 *
              (elementInfo.washing +
                elementInfo.ironing +
                elementInfo.drycleaning +
                elementInfo.chemicalcleaning)}{" "}
          </span>
        </td>
      </tr>
    );
  }
};
export default GsumOrderRow;
