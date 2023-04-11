import React from "react";
import TextInput from "./Component/TextInput.tsx";
import "./Component/TextInput.scss";

function App() {
  return (
    <>
      <div className="text-inputs-container">
        <TextInput
          label="Username"
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          required
          width="small"
        />
        <TextInput
          label="Password"
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          width="small"
        />
      </div>

      <div className="text-inputs-container">
        <TextInput
          label="Email"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          width="large"
        />
      </div>
    </>
  );
}

export default App;
