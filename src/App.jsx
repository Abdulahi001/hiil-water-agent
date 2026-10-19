import { useState,useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./pages/Form";
import Info from "./pages/Info";

function App() {
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    price: 0,
    count: 0,
    total: 0,
    benefit: 0,
    contact: 0,
    location: "",
    category: "",
  });
  const [dataArray, setDataArray] = useState(() => {
  try {
    const saved = localStorage.getItem("dataArray");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
});
  const [page ,setPage] = useState("form");
  function handleSubmit(e) {
    e.preventDefault();

    // Read the form data
    const form = new FormData(e.target);
      const price = parseFloat(form.get("price"));
  const count = parseInt(form.get("count"));
  const total = price * count;
      const newItem = {
    id: formData.id + 1,
    name: form.get("name"),
    price,
    count,
    total,
    benefit: (total * 30.77) / 100,
    contact: parseInt(form.get("contact")),
    location: form.get("location"),
    category: form.get("category"),
  };

    setFormData(newItem);
   
     setDataArray(prev => [...prev, {...newItem, id: prev.length + 1}]);  
    console.log("Form submitted:", formData);
   
  }
    useEffect(() => {
    console.log(dataArray);
  }, [dataArray]);

  useEffect(() => {
  try {
    localStorage.setItem("dataArray", JSON.stringify(dataArray));
  } catch (err) {
    console.error("Could not save to localStorage:", err);
  }
}, [dataArray]);

  
  return (
    <div className="App">
      <Navbar page={page} setPage={setPage} />
      {page === "form" ? 

      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="name" id="name" placeholder="name" />
        <div className="sub-inputs">
          <input type="number" name="price" id="price" placeholder="price" />
          <input type="number" name="count" id="count" placeholder="count" />
         <small className="benefit" id="benefit">
            Benefit: ${formData.benefit.toFixed(2)}
          </small>
          <small className="total" id="total">
            Total: ${formData.total.toFixed(2)}
          </small>
        </div>
         <input
          type="number"
          name="contact"
          id="contact"
          placeholder="contact"
        />
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Location"
        />
        <input
          type="text"
          name="category"
          id="category"
          placeholder="category"
        />
        <button className="create-btn" type="submit">
          Create
        </button>
        <input type="text" name="search" id="search" placeholder="Search" />
        <div className="search-btns">
          <button className="name-btn" type="button">
            Search by name
          </button>
          <button className="category-btn" type="button">
            Search by category
          </button>
        </div>
      </form> : <Info tableData={dataArray} />}
      

   
    </div>
  );
}

export default App;
