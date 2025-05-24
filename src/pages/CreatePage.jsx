import { useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreatePage() {
  const navigate = useNavigate();
  // first approach
  // const [bookName,setBookName] = useState("")
  // const [bookGenre,setBookGenre] = useState("")
  // const [bookAuthor,setBookAuthor] = useState("")
  // const [bookPrice,setBookPrice] = useState("")

  // console.log(bookName,bookGenre,bookAuthor,bookPrice)

  // second approach
  const [bookData, setBookData] = useState({
    bookName: "",
    bookGenre: "",
    bookAuthor: "",
    bookPrice: "",
  });
  const handleChange = (event) => {
    // let value = event.target.value // k type haneko
    // let name = event.taget.name  // kun ma type haneko
    let { name, value } = event.target;
    // bookName c programming
    // bookAuthor hello
    setBookData({
      ...bookData, // agadi j xa jasto xa testai hoss (Rest operator...)
      [name]: value, // value --> nepali, name --> bookName
    });
  };
  const submitData = async (event) => {
    event.preventDefault();
    // mathi state ma vako data lai api lai dine -- localhost:3000/api/books - post method
    // post garda dueta pathaunai paryo , pathaune data ko format always object hunu parxa, jun at the end axios le json ma convert garera pathaedinxa
    const response = await axios.post(
      "http://localhost:3000/api/books",
      bookData
    );
    if (response.status === 200) {
      alert("Book added successfully");
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white border-4 rounded-lg shadow relative m-10">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Create Book Info</h3>
        </div>
        <div className="p-6 space-y-6">
          <form onSubmit={submitData}>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="book-name"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Book Name
                </label>
                <input
                  type="text"
                  name="bookName"
                  onChange={handleChange}
                  id="book-name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="enter book name*"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="genre"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Book Genre
                </label>
                <input
                  type="text"
                  name="bookGenre"
                  onChange={handleChange}
                  id="category"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="enter book category*"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="author"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Book Author
                </label>
                <input
                  type="text"
                  name="bookAuthor"
                  onChange={handleChange}
                  id="author"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="enter author name*"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Book Price
                </label>
                <input
                  type="number"
                  name="bookPrice"
                  onChange={handleChange}
                  id="price"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="enter Price*"
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div className="p-6 border-t border-gray-200 rounded-b">
          <button
            className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
            onClick={submitData}
          >
            Save All
          </button>
        </div>
      </div>
    </>
  );
}
export default CreatePage;
