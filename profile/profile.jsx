import React, { useState } from 'react';



const ProfileForm = () => {
  const [fullname, setFullname] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [dob, setDob] = useState('');
  const [year, setYear] = useState('');
  const [branch, setBranch] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:5000/profile', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullname, phoneno, dob, year, branch }),
    });


    const data = await response.json();
    setResult(data.message);
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          id="fullname"
          className="full-name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="phoneno">Phone No.</label>
        <input
          type="text"
          id="phoneno"
          className="ph"
          value={phoneno}
          onChange={(e) => setPhoneno(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="date">Date of Birth</label>
        <input
          type="date"
          id="date"
          className="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="year">Year</label>
        <select
          id="year"
          className="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option>select</option>
          <option>1y</option>
          <option>2y</option>
          <option>3y</option>
          <option>4y</option>
          <option>5y</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="branch">Branch</label>
        <select
          id="branch"
          className="branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        >
          <option>Select</option>
          <option>Computer Science</option>
                    <option>Data Science</option>
                    <option>Engineering Physics</option>
                    <option>Mathematics and Computing</option>
                    <option>Mechanical Engineering</option>
                    <option>Civil Engineering</option>
                    <option>Geological Technology</option>
                    <option>Geophysical Technology</option>
                    <option>Chemical Engineering</option>
                    <option>Metallurgy</option>
                    <option>Bio Technology</option>
                    <option>BS-MS Physics</option>
                    <option>Engineering Physics</option>
                    <option>Chemical Science</option>
        </select>
      </div>
      <div className="button">
        <input type="submit" className="submit" value="submit" />
        <input type="reset" className="reset" value="reset" />
      </div>
    </form>
  );
  
 
};

export default ProfileForm;
import './style.css';

