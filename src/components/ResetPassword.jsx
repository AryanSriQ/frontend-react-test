import { useParams } from "react-router-dom";

export const ResetPassword = () => {
  const { token } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, confirmPassword } = e.target.elements;

    if (password.value !== confirmPassword.value) {
      alert("Passwords do not match");
      return;
    }

    const data = {
      password: password.value,
      confirmPassword: confirmPassword.value,
    };

    const resetToken = token.split("=")[1];

    fetch(`http://localhost:8000/api/auth/reset-password/${resetToken}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
        alert("Password reset successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <h1>Reset Password</h1>
      <input type="text" name="password" id="password" />
      <input type="text" name="confirmPassword" id="confirmPassword" />
      <button type="submit">Submit</button>
    </form>
  );
};
