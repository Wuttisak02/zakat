import React, { useState } from "react";
import { Button, Modal, Select } from "antd";

interface CareerAndFinancialProps {
  isVisible: boolean;
  onClose: () => void;
}

const CareerAndFinancial: React.FC<CareerAndFinancialProps> = ({
  isVisible,
  onClose,
}) => {
  const handleOk = () => {
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };

  return (
    <Modal
      title={
        <span style={{ textAlign: "center", width: "100%", display: "block" }}>
          Recipient Type
        </span>
      }
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
      okText="Next" // กำหนดข้อความปุ่ม OK เป็น "Next"
    >
      <div
        style={{ padding: "20px", display: "flex", justifyContent: "center" }}
      >
        <Select
          labelInValue
          defaultValue={{ value: "lucy", label: "Select Recipient Type" }}
          style={{ width: 300 }}
          onChange={handleChange}
          options={[
            {
              value: "Individual",
              label: "Individual",
            },
            {
              value: "juristic",
              label: "Juristic",
            },
          ]}
          dropdownStyle={{ maxHeight: 400, overflowY: "auto" }}
        />
      </div>
    </Modal>
  );
};

export default CareerAndFinancial;
