import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./pages/Form";
import Info from "./pages/Info";

function App() {
  const [data, setFormData] = useState({
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
  const [dataArray, setDataArray] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();

    // Read the form data
    const form = e.target;
     const formData = new FormData(form);
     const id = data.id + 1;
     const name = formData.get("name");
     const price = parseFloat(formData.get("price"));
     const count = parseInt(formData.get("count"));
     const total = price * count;
     const benefit = parseFloat(formData.get("benefit"));
     const contact = parseInt(formData.get("contact"));
     const location = formData.get("location");
     const category = formData.get("category");

    setFormData({
      id: id,
      name: name,
      price: price,
      count: count,
      total: total,
      benefit: benefit,
      contact: contact,
      location: location,
      category: category,
    });
   
   setDataArray([...dataArray,{...data}]);
  
    console.log( dataArray);
  }
  
  return (
    <div className="App">
      <Navbar />

      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="name" id="name" placeholder="name" />
        <div className="sub-inputs">
          <input type="number" name="price" id="price" placeholder="price" />
          <input type="number" name="count" id="count" placeholder="count" />
          <input
            type="number"
            name="benefit"
            id="benefit"
            placeholder="benefit"
          />
          <small className="total" id="total">
            Total: ${data.total.toFixed(2)}
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
      </form>

      <Info tableData={dataArray} />
    </div>
  );
}

export default App;
