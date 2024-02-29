import "../css/PasswordStyles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const [key, setKey] = useState("");
  const [incorrect, setIncorrect] = useState(false);
  const navigate = useNavigate();
  const password = "05212022";
  const checkPassword = () => {
    if (key === password) {
      navigate("/cipher");
    } else {
      setIncorrect(true);
    }
  };
  return (
    <div className="container-password">
      <div>
        <p className="form-label">Password (it's a special date):</p>
        <div style={{ margin: "0 auto" }}>
          <input
            className="form-input"
            style={{ width: "400px" }}
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>
        <button className="form-button" onClick={checkPassword}>
          Enter
        </button>
        {incorrect && (
          <div>
            <p>The password was incorrect.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Password;
