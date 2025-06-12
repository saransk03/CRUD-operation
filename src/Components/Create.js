import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../Constant/URL';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate()
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [checked,setChecked] = useState(false)

  const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users", {
          firstName,
          lastName,
          checked
        },{ timeout: 5000 });
          
        setFirstName('');
        setLastName('');
        setChecked(false);
        navigate('/read')
      }

  return (
    <div>
      <form className='form'>
        <div>
          <label htmlFor="firstname">First Name : </label>
          <input name='firstname' id='firstname' value={firstName} 
          onChange={(e)=>setFirstName(e.target.value)}
          placeholder='Enter first name' />
        </div>
        <br/>

        <div>
          <label htmlFor="lastname">Last Name : </label>
          <input name='lastname' id='lastname' value={lastName} 
          onChange={(e)=>setLastName(e.target.value)}
          placeholder='Enter last name' />
        </div>
        <br/>
        <label>
            <input type='checkbox' checked={checked}
            onChange={(e)=>setChecked(e.target.checked)}/> Agree Terms and Conditions
        </label>
       
        <br/>

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Create;
