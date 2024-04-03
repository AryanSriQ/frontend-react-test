import "./App.css";
import { ResetPassword } from "./components/ResetPassword";
import { forgotPassword } from "./components/ForgotPassword";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Hello Home</div>} />
      <Route path="/success" element={<div>Success</div>} />
      <Route path="/error" element={<div>Error</div>} />
      <Route path="/register" Component={Register} />
      <Route path="/login" Component={Login} />
      <Route path="/api/auth/reset-password/:token" Component={ResetPassword} />
      <Route path="/forgotPassword" Component={forgotPassword} />
      <Route path="/protected" Component={ProtectedRoute} />
    </Routes>
  );
}

export default App;
