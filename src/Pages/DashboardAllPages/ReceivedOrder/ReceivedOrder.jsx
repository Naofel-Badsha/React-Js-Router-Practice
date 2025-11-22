import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ReceivedOrder = () => {
  const [recivedOrders, setRecivedOrders] = useState([]);

  useEffect(() => {
    fetch("../../../../public/dashboardProduct.json")
      .then((res) => res.json())
      .then((data) => setRecivedOrders(data));
  }, []);
  console.log(recivedOrders);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Amount</th>
              <th>PaymentStatus</th>
              <th>ReceivedStatus</th>
              <th>Action</th>
            </tr>
          </thead>

          {recivedOrders.map((recivedOrder) => (
            <tbody recivedOrder={recivedOrder.index + 1}>
              {/* row 1 */}
              <tr>
                <th>{recivedOrder.id}</th>
                <td>{recivedOrder.Customer}</td>
                <td></td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ReceivedOrder;
