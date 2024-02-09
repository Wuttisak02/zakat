import React from "react";
import { Card } from "antd";

const Protofile: React.FC = () => {
  return (
    <Card title="Proto File">
      <div className="container">
        <div className="profileWrapper" style={profileWrapperStyle}>
          <img
            id="profileImage"
            src="https://i.pinimg.com/originals/17/0a/db/170adbda4075701931a726178b30f3b5.jpg"
            alt="Profile Image"
            style={profileImageStyle}
          />
          <div className="profileName">
            <input id="nameInput" type="text" placeholder="Enter your name" />
          </div>
        </div>
      </div>
    </Card>
  );
};

const profileWrapperStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
};

const profileImageStyle: React.CSSProperties = {
  width: "150px",
  height: "150px",
  objectFit: "cover",
  marginRight: "20px",
};

export default Protofile;
