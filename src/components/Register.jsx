import { useState } from "react";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.password || !data.confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    fetch("http://localhost:8000/api/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
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
    <form
      onClick={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <label htmlFor="name">name</label>
      <input type="text" name="name" id="name" onChange={handleChange} />
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
      <label htmlFor="confirmPassword">confirmPassword</label>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        autoComplete="off"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;
