import React from "react";
import { Routes, Router, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public routes */}
        <Route path="/sign-in" element={<SigninForm />} />

        {/* Private routes */}
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
