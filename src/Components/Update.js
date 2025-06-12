import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../Constant/URL";

const Update = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [checked, setChecked] = useState(false);

  const updateChange = async (q) => {
    q.preventDefault()
      await axios({
        method: "put",
        url: `http://localhost:3001/users/${id}`,
        data: {
          firstName,
          lastName,
          checked,
        },
        timeout: 5000, // 5 seconds wait time
      });
      navigate("/read");
    
  };

  useEffect(() => {
    const storedId = localStorage.getItem("id");
    const storedFName = localStorage.getItem("firstName");
    const storedLName = localStorage.getItem("lastName");
    const storedChecked = localStorage.getItem("checked");

    setId(storedId); // fallback empty string to avoid crash
    setFirstName(storedFName);
    setLastName(storedLName);
    setChecked(storedChecked === "true"); // convert string to boolean
  }, []);

  return (
    <div>
      <form className="form">
        <div>
          <label htmlFor="firstname">First Name : </label>
          <input
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first name"
          />
        </div>
        <br />

        <div>
          <label htmlFor="lastname">Last Name : </label>
          <input
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter last name"
          />
        </div>
        <br />
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />{" "}
          Agree Terms and Conditions
        </label>

        <br />

        <button onClick={updateChange}>Update</button>
      </form>
    </div>
  );
};

export default Update;
