import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/auth.css";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    api.get("/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      setUser(response.data);
    })
    .catch(() => {
      localStorage.removeItem("token");
      navigate("/");
    });

  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1>Welcome</h1>

        <p>
          <strong>Name:</strong> {user.name}
        </p>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <button onClick={logout}>
          Logout
        </button>

      </div>
    </div>
  );
}

export default Profile;