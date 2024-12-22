import React from 'react';
import './App.css';
import Input from './components/Input';
import ParticlesComponent from './components/particles';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <ParticlesComponent id="particles-id"/>
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
    <Footer/>
    </>
  );
}

export default App;
