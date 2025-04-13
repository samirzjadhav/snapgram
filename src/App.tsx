import React from "react";
import { Routes, Router, Route } from "react-router-dom";
import "./index.css";
import SigninForm from "./_auth/forms/SigninForm";
import { Home } from "./_root/pages";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-in" element={<SignupForm />} />
        </Route>

        {/* Private routes */}
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
