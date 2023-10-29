import React from "react";
import { useState } from "react";
// import "./form";

const ProfileForm = () => {
    const [post_desc, setPost_Description] = useState('');
    // const [post_img, setPost_img] = useState('');
    const [type, setType] = useState('');
    const [upvotes, setUpvotes]= useState(post_desc.upvotes);
    const [upvoted , setUpvoted]= useState(false);
    
    const [result, setResult] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const response = await fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ post_desc , type , upvotes }),
      });
  
  
      const data = await response.json();
      setResult(data.message);
     
    };
    
    const handleUpvote = () => {
      if(!upvoted){
      setUpvotes(upvotes + 1);
      // onUpvote(post_desc.id);
      setUpvoted(true);
      }
    };
  
    return (
      <div className="tweet">
        <p>{post_desc.text}</p>
        <button onClick={handleUpvote }>Upvote ({upvotes})</button>
        <form onSubmit={handleSubmit}>
        <div className="cont">
        {/* <input id="post_img" type="file" className="pic" value= {post_img} onChange={(e) => setPost_img(e.target.value)}> <label class="plab">Enter Photo</label></input> */}
        <label htmlFor="">Enter Catgory</label>
        <input id="type" type="text" className="category" value={type} onChange={(e) => setType(e.target.value)}/>
        <label htmlFor="">Tell your BT</label>
        <input id="post_desc" type="text" className="pov" value={post_desc} onChange={(e) => setPost_Description(e.target.value)}/>
        <button className="sub" type="submit">Submit</button>
        </div>
        </form>
      </div>
    );
  }
  
  
  

 
// function Form(){
//     return(
       

//     )
// }
export default ProfileForm;