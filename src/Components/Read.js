import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../Constant/URL";
import { Link, useNavigate } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate()

  const getData = async () => {
    const res = await axios.get(API_URL);
    setApiData(res.data);
  };

  const updateData = ({id, firstName, lastName, checked})=>{
      localStorage.setItem('id', id)
      localStorage.setItem('firstName', firstName) 
      localStorage.setItem('lastName', lastName)
      localStorage.setItem('checked', checked)
      navigate('/update')
  }

  const deleteData = async (id)=>{
    await axios.delete(API_URL + id);
    getData();
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      <table>
        <tr>
          <th>FristName</th>
          <th>LastName</th>
          <th>Checked</th>
        </tr>
        {apiData.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.checked ? "checked":"not checked"}</td>
              <td>
                <button onClick={()=>updateData(item)}>Update</button>
              </td>
              <td>
                <button onClick={()=>{deleteData(item.id)}}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
      <br/>
      <Link to={"/"}>
        <button>
          Create New User
        </button>
      </Link>
    </div>
  );
};

export default Read;
