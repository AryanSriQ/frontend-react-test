export const forgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/api/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: document.getElementById("email").value,
      }),
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
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
