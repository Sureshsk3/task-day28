import React from "react";
import { useSelector } from "react-redux";
function DisplayCard() {
  const card = useSelector((state) => state.card);
  return (
    <div className="m-5 w-[30%] h-fit md:left-[70%] md:sticky top-20  rounded">
      <section className="border-2 rounded border-black bg-black text-white ">
        <div>
          <h2 className="text-center">Cart Items</h2>
        </div>
        <div className="flex justify-between p-2 ">
          <div className="p-3">
            <h5>Price </h5>
            <h5>Discount </h5>
            <h3>Total </h3>
          </div>
          <div className="m-3">
            <h5>: </h5>
            <h5>: </h5>
            <h3>: </h3>
          </div>
          <div className="p-3 ">
            <h5>{card.totalAmount}</h5>
            <h5>0%</h5>
            <h3>{card.totalAmount}</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DisplayCard;
