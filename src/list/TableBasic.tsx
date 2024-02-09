import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const TableBasic: React.FC = () => {
  const columns: string[] = [
    "No.",
    "Recipient Name",
    "Type",
    "Request Date",
    "Last Update",
    "Status",
    "Remark",
  ];

  const data: (string | JSX.Element)[][] = [
    [
      "1",
      "Doneefirstname+Lastname",
      "Individual",
      "1 Jan 2024",
      "1 Jan 2024",
      "Pending",
      <a href="URL">URL</a>,
    ],
    [
      "2",
      "Donee Juristic Co.",
      "Juristic",
      "1 Jan 2024",
      "1 Jan 2024",
      "Approve",
      <a href="URL">URL</a>,
    ],
    [
      "3",
      "Donee Juristic Co.",
      "Juristic",
      "1 Jan 2024",
      "1 Jan 2024",
      "Onboard",
      <a href="URL">URL</a>,
    ],
    [
      "4",
      "Donee Juristic Co.",
      "Juristic",
      "1 Jan 2024",
      "1 Jan 2024",
      "Reject",
      <a href="URL">URL</a>,
    ],
    [
      "5",
      "Donee Juristic Co.",
      "Juristic",
      "1 Jan 2024",
      "1 Jan 2024",
      "Denied",
      <a href="URL">URL</a>,
    ],
    [
      "6",
      "Peemaimeemap Heartrock",
      "Individual",
      "7 Jan 2024",
      "7 Jan 2024",
      "Pending",
      <a href="URL">URL</a>,
    ],
  ];

  const options = { filter: true, filterType: "checkbox" };

  return (
    <ThemeProvider theme={darkTheme}>
      <MUIDataTable
        title={"Donee List"}
        data={data}
        columns={columns}
        //options={options}
      />
    </ThemeProvider>
  );
};

export default TableBasic;
