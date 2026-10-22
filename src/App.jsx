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
    countWithBottles: 0,
    total: 0,
    benefit: 0,
    dept: 0,
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
      const paid = parseFloat(form.get("paid"));
  const amount = parseInt(form.get("amount"));
  const countWithBottles = parseInt(form.get("countWithBottles"));
  const total = (130 * amount) + (countWithBottles * 550);
      const newItem = {
    id: formData.id + 1,
    name: form.get("name"),
    paid,
    amount,
    countWithBottles,
    total,
    benefit: (amount * 35) + (countWithBottles * 35),
    dept: total - paid,
    contact: parseInt(form.get("contact")),
    location: form.get("location"),
    category: form.get("category"),
  };

    setFormData(newItem);
   
     setDataArray(prev => [...prev, {...newItem, id: prev.length + 1}]);  
   
    window.location.reload();
   
  }

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
        <input type="text" name="name" id="name" placeholder="name" outocomplete="off" required={true} />
        <div className="sub-inputs">
     
          <input type="number" name="amount" id="amount" placeholder="amount" outocomplete="off" required={true} />
          <input type="number" name="countWithBottles" id="countWithBottles" placeholder="count with bottles" outocomplete="off" required={true}/>
           <input type="number" name="paid" id="paid" placeholder="paid" outocomplete="off" required={true}/>
     {/*    <small className="benefit" id="benefit">
            Benefit: ${formData.benefit.toFixed(2)}
          </small>
          <small className="total" id="total">
            Total: ${formData.total.toFixed(2)}
          </small>
          */} 
        </div>
         <input
          type="number"
          name="contact"
          id="contact"
          placeholder="contact"
          outocomplete="on"
          required={true}
        />
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Location"
          outocomplete="on"
          required={true}
        />
        <input
          type="text"
          name="category"
          id="category"
          placeholder="category"
          outocomplete="on"
          required={true}
        />
        <button className="create-btn"type="submit">
          Create
        </button>
       
      </form> : <Info tableData={dataArray} />}
      

   
    </div>
  );
}

export default App;
