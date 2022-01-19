import React from "react";

export default function Info() {
  return (
    <div className="info">
      <img src="/myface.jpg" alt="My picture" />
      <h1>Ali Abdullah</h1>
      <h2>FrontEnd Developer</h2>
      <div className="info-btn">
      <a href="mailto:aabdullah.bscs20seecs@seecs.edu.pk"><button className="mail">Email</button></a>
        <a href="https://www.linkedin.com/in/ali-abdullah-8bab4b1b9/"><button className="linkedin" >LinkedIn</button></a>
      </div>
    </div>
  );
}
