import React from "react";
import "./App.css";
import Input from "./components/Input";
import ParticlesComponent from "./components/particles";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function RedirectComponent({ to }) {
  window.location.href = to; 
  return null; 
}

function Home() {
  return (
    <>
      <ParticlesComponent id="particles-id" />
      <div className="hv-links">
        <Input
          userid="@himanshuver"
          platformname="Linkedin"
          imgpath="https://files.hvin.tech/linkedin.png"
          link="https://www.linkedin.com/in/himanshuver/"
        />
        <Input
          userid="@himanshu_ver"
          platformname="Codeforces"
          imgpath="https://files.hvin.tech/codeforces.png"
          link="https://codeforces.com/profile/himanshu_ver"
        />
        <Input
          userid="@hvin8"
          platformname="Codechef"
          imgpath="https://files.hvin.tech/codechef.png"
          link="https://www.codechef.com/users/hvin8"
        />
        <Input
          userid="@himanshuverma8"
          platformname="Leetcode"
          imgpath="https://files.hvin.tech/leetcode.png"
          link="https://leetcode.com/himanshuverma8"
        />
        <Input
          userid="@himanshu_ver"
          platformname="GFG"
          imgpath="https://files.hvin.tech/gfg.png"
          link="https://www.geeksforgeeks.org/user/himanshu_ver/"
        />
        <Input
          userid="@himanshuverma8"
          platformname="Github"
          imgpath="https://files.hvin.tech/github.png"
          link="https://github.com/himanshuverma8"
        />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Redirect when visiting specific paths */}
        <Route path="/linkedin" element={<RedirectComponent to="https://www.linkedin.com/in/himanshuver/" />} />
        <Route path="/codeforces" element={<RedirectComponent to="https://codeforces.com/profile/himanshu_ver" />} />
        <Route path="/codechef" element={<RedirectComponent to="https://www.codechef.com/users/hvin8" />} />
        <Route path="/leetcode" element={<RedirectComponent to="https://leetcode.com/himanshuverma8" />} />
        <Route path="/gfg" element={<RedirectComponent to="https://www.geeksforgeeks.org/user/himanshu_ver/" />} />
        <Route path="/github" element={<RedirectComponent to="https://github.com/himanshuverma8" />} />
        {/* this line is removed */}
        <Route path="/logo" element={<RedirectComponent to="https://files.hvin.tech/lighting_logo.png" />} />

        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
