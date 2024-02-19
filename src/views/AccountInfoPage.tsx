import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TableBasic from "../list/TableBasic";
import Protofile from "../inform/protofile";
import Inform from "../inform/inform";
import Health from "../inform/health";
import Family from "../inform/family";
import CareerAndFinancial from "../dialog/CareerAndFinancial";

const AccountInfoPage: React.FC = () => {
  const [isStrictModeOpen, setIsStrictModeOpen] = useState<boolean>(false);
  const [isTableBasicVisible, setIsTableBasicVisible] = useState<boolean>(true);
  const [isCareerModalOpen, setIsCareerModalOpen] = useState<boolean>(false);

  const handleStrictModeClick = () => {
    setIsStrictModeOpen(true);
    setIsTableBasicVisible(true);
  };

  const handleCreateDoneeClick = () => {
    setIsCareerModalOpen(true);
  };

  const handleCareerModalClose = () => {
    setIsCareerModalOpen(false);
  };

  const darkGrayButtonStyle = {
    backgroundColor: "#333",
    color: "white",
    border: "2px solid white",
  };

  return (
    <>
      {isStrictModeOpen ? (
        <React.StrictMode>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Stack
              spacing={2}
              direction="row"
              style={{ alignSelf: "flex-end" }}
            >
              <Button
                variant="contained"
                style={darkGrayButtonStyle}
                onClick={() => setIsStrictModeOpen(false)}
              >
                BACK
              </Button>
              <Button
                variant="contained"
                style={darkGrayButtonStyle}
                onClick={() => setIsStrictModeOpen(false)}
              >
                SUMMIT
              </Button>
            </Stack>
          </div>

          <Protofile />
          <Inform />
          <br />
          <Health />
          <br />
          <Family />
        </React.StrictMode>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Stack spacing={2} direction="row" style={{ alignSelf: "flex-end" }}>
            <Button
              variant="contained"
              style={darkGrayButtonStyle}
              onClick={handleCreateDoneeClick}
            >
              Create New Donee
            </Button>
          </Stack>

          {isTableBasicVisible && <TableBasic />}
        </div>
      )}

      {/* Create New Donee Dialog */}
      <CareerAndFinancial
        isVisible={isCareerModalOpen}
        onClose={handleCareerModalClose}
      />
    </>
  );
};

export default AccountInfoPage;
