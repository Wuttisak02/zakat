import React from "react";
import { Card } from "antd";

const Health: React.FC = () => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Card title="Health Information">
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

export default Health;
