import React from "react";
import { Card } from "antd";

const Family: React.FC = () => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Card title="Family Information">
      <form onSubmit={handleFormSubmit}>
        <label>
          <input type="radio" name="like" value="like" /> Yes
        </label>
        <br />
        <label>
          <input type="radio" name="like" value="don'tlike" /> No
        </label>
      </form>
    </Card>
  );
};

export default Family;
