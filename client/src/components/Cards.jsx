import React from "react";
import toast from "react-hot-toast";

const Cards = ({item}) => {
    console.log(item.image);

    // Buy Now button
    const buyNow = () => {
      toast('Sorry, Book is coming soon 📖');
    }

  return (
    <>
      <div className="mt-6 my-3 ">
        <div className="card w-80 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border-r">
          <figure>
            <img src={item.image} alt="Shoes" className="h-48" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline cursor-pointer hover:bg-blue-500 hover:border-blue-700 hover:text-white duration-300" onClick={buyNow}>Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
