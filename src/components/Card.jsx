import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DATA,INCREMENT } from "../slices/CardSlice";
// import { INCREMENT } from "../slices/ItemsSlice";
import axios from "axios";
import toast from "react-hot-toast";

function Card() {
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState([0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [value, setValue] = useState();
  const card = useSelector((state) => state.card);
  // console.log(card);
  
  const handleChange = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/recipes`);
      dispatch(DATA(res.data.recipes));
    } catch (error) {
      toast.error("Data Not Found");
    }
  };
  const handleClick = () => {
    dispatch(INCREMENT(value));
    toast.success("Item Add to Cart");
  };
  useEffect(() => {
    handleChange();
  }, []);

  return (
    <>
      <div className="m-2 md:w-[60%]">
        <h1 className="text-center m-5">Food Available</h1>
        <main className="grid md:grid-cols-2 gap-5 w-full">
          {card.list.map((item, i) => {
            return (
              <div
                key={i}
                className="grid border-2 border-black w-fit shadow-2xl rounded-lg "
              >
                <img
                  src={item.image}
                  alt=""
                  className="flex justify-center items-center rounded-t"
                />
                <h4 className="m-3 text-2xl">Name: {item.name}</h4>
                <h6 className="mx-3 my-2 mb-0">Cuisine : {item.cuisine}</h6>
                <h6 className="mx-3 my-2 ">Ratings : {item.rating} %</h6>
                <h5 className="mx-3 text-3xl">
                  Price :{" "}
                  <i className="">{item.price} &nbsp;RS/-</i>
                </h5>
                <div className=" flex items-center justify-between p-3">
                  <h5 className="mb-0">
                    Quantity :&nbsp;{" "}
                    <select
                      name=""
                      className="border-2 border-black w-15 rounded hover:bg-black hover:text-white transition-all"
                      onChange={(e) =>
                        setValue({quantity:e.target.value,price:item.price,id:item.id})
                      }
                    >
                      {quantity.map((e, i) => (
                        <option key={i}>{e}</option>
                      ))}
                    </select>
                  </h5>
                  <button
                    className="p-2 mx-3 bg-green-500 rounded hover:bg-black hover:text-white"
                    onClick={(e) => handleClick(e)}
                  >
                    Add
                  </button>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
}

export default Card;
