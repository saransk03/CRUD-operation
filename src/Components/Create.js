import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../Constant/Constant';

const Create = () => {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [checked,setChecked] = useState(false)

  const handleSubmit = async () => {

        await axios.post(API_URL, {
          firstName,
          lastName,
          checked
        });
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
