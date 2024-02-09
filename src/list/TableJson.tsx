import React from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import users from "./users.json";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface User {
  id: number;
  name: string;
  gender: string;
}

class TableJson extends React.Component {
  render() {
    const columns = [
      {
        name: "id",
        label: "ID",
      },
      {
        name: "name",
        label: "NAME",
      },
      {
        name: "gender",
        label: "GENDER",
      },
    ];

    const options = {
      filter: true,
      selectableRows: "multiple",
      filterType: "dropdown",
      responsive: "vertical",
      rowsPerPage: 5,
    };

    return (
      <ThemeProvider theme={darkTheme}>
        <MUIDataTable
          title={"Lista de usuarios"}
          data={users as User[]}
          columns={columns}
          //options={options}
        />
      </ThemeProvider>
    );
  }
}

export default TableJson;
