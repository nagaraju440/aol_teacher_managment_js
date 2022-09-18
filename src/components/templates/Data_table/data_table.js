import React from "react";
import { useState } from "react";
import {
  DataGrid,
} from "@mui/x-data-grid";
import data from "./data.json";
import FilterListIcon from "@mui/icons-material/FilterList";

console.log(data);
const columns = [
  {
    field: "id",
    headerName: "Country",
    minWidth: 130,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "active",
    headerName: "Active",
    minWidth: 170,
    headerAlign: "center",
    align: "center",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "inactive",
    headerName: "Inactive",
    minWidth: 170,
    headerAlign: "center",
    align: "center",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "viewonly",
    headerName: "View Only",
    minWidth: 170,
    headerAlign: "center",
    align: "center",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "totalteachers",
    headerName: "Total Teachers",
    minWidth: 250,
    headerAlign: "center",
    align: "center",
    sortable: false,
    disableColumnMenu: true,
  },
];

export default function Data_table(props) {
  const rows = props.data.map((row) => {
    return {
      id: row.id,
      active: row.active,
      inactive: row.inactive,
      viewonly: row.viewonly,
      totalteachers: row.totalteachers,
    };
  });
  const [selection, setselection] = useState([]);
  return (
    <div
      style={{
        height: props.height,
        width: "100%",
      }}
    >
      <DataGrid
       {...data}
       components={{
        ColumnMenuIcon: FilterListIcon,
        // ColumnMenu: 
       }}
        rows={rows}
        columns={columns}
        disableColumnSelector={true}
        disableColumnFilter={true}
        
        checkboxSelection
        sx={{
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "&.MuiDataGrid-root": {
            border: "none",
          },
          ".MuiDataGrid-columnHeader": {
            fontSize: 16,
            fontWeight: "bold",
          },
          ".MuiDataGrid-sortIcon": {
            opacity: "inherit !important",
            color: "black",
          },
          "& .MuiDataGrid-iconButtonContainer": {
            visibility: "visible !important",
          },
          "& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle": {
            fontWeight: 700,
            fontSize: "14px",
          },
          "& .css-1pe4mpk-MuiButtonBase-root-MuiIconButton-root": {
            color: "black",
          },
          "& .MuiDataGrid-iconButtonContainer": {
            display: "none",
          },
          // ".MuiDataGrid-gridMenuList": {
          //   backgroundColor: "pink",},
          "& .MuiDataGrid-iconButtonContainer1": {
            paddingLeft: "5px",
            color: "black",
          },
          // "&.MuiButtonBase-root-MuiMenuItem-root":{
          //   backgroundColor:'red',
          //   // content:"This text replaces the original."
          // }
        }}
        hideFooter="true"
        selectionModel={selection}
        onSelectionModelChange={(newSelection,data) => {
          setselection(newSelection);
          props.getSelectedRows&&props.getSelectedRows(rows,newSelection)
        }}
      />
    </div>
  );
}
