// App.js
import { useState } from "react";
import CarList from "././components/CarList";

const containerStyle = {
  width: "800px",
  margin: "80px auto",
  padding: "30px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "20px",
};

const inputStyle = {
  display: "block",
  width: "100%",
  margin: "9px 0",
  padding: "9px",
  fontSize: "14px",
  border: "1px solid #ccc",
  borderRadius: "9px",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  fontSize: "15px",
  cursor: "pointer",
};

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Check that username and password are not empty and are different
    if (username.trim() && password.trim() && username !== password) {
      setLoggedIn(true);
    } else {
      alert("Username and password must be different (and not empty)!");
    }
  };

  if (!loggedIn) {
    return (
      <div style={containerStyle}>
        <h2 style={titleStyle}>Exam -- Web Programming (Front end)</h2>
        <input
          type="text"
          style={inputStyle}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          style={inputStyle}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} style={buttonStyle}>
          Connect
        </button>
      </div>
    );
  }

  // If loggedIn is true, show CarList
  return <CarList />;
}
