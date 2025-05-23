import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

function SinglePage() {
  const navigate = useNavigate();
  const { id } = useParams(); // used to get the parameter of route ..
  const [book, setBook] = useState({});
  const fetchBook = async () => {
    const response = await axios.get("http://localhost:3000/api/books/" + id);
    setBook(response.data.data); // response.data.hello
  };
  useEffect(() => {
    fetchBook();
  }, []);

  const deleteBook = async () => {
    const response = await axios.delete(
      "http://localhost:3000/api/books/" + id
    );
    if (response.status === 200) {
      // home page ma navigation
      navigate("/");
    } else {
      alert("Something went wrong");
    }
    // console.log("Delete function triggered")
  };
  return (
    <>
      <Navbar />
      <h1>{book.bookName}</h1>
      <p>{book.price}</p>
      <p>{book.bookAuthor}</p>
      <button
        onClick={deleteBook}
        className="border-2 border-black-500 bg-red-100 text-red-600 px-4 py-2 rounded hover:bg-red-200"
      >
        Delete
      </button>
      <button className="border-2 border-black-500 bg-red-100 text-red-600 px-4 py-2 rounded hover:bg-red-200">
        Edit
      </button>
    </>
  );
}
export default SinglePage;
