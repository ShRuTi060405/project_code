import React from "react";
import "./Form.css"

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault(); 
  };



  return (
    <form className="cont" onSubmit={handleSubmit}>
      <label htmlFor="photo">Enter Photo</label>
      <input type="file" id="photo" className="pic" />
      
      <label htmlFor="category">Enter Category</label>
      <input type="text" id="category" className="category" />
      
      <label htmlFor="bt">Tell Your BT</label>
      <input type="text" id="bt" className="pov" />
      
      <button className="sub" type="submit">Submit</button>
    </form>
  );
}

export default Form;
