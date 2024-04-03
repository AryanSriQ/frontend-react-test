import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" onChange={handleChange} />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <Link to="/profile"></Link>
    </div>
  );
};

export default Login;
