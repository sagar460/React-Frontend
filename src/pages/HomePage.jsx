import axios from "axios";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";

function HomePage() {
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3000/api/books");
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
export default HomePage;
