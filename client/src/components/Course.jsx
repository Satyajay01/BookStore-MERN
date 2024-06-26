import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

const Course = () => {
  
  //Fetching data from the database
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook()
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28">
        <div className="items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-green-600">Here! :)</span>{" "}
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            expedita eius deleniti? Fugit ea alias adipisci natus veniam. Dolor
            eius consectetur aut molestiae laudantium accusantium exercitationem
            iure soluta, quaerat iusto? Neque, illum ad eos doloremque porro
            aspernatur eius explicabo commodi quas, tenetur facere ipsa!
            Exercitationem molestias corporis illo laboriosam harum.
          </p>
          <Link to="/">
            <button className="btn btn-outline btn-accent hover:text-white mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
