import React from "react";
import { useState } from "react";
import {
  DataGrid,
  ColDef,
  ValueGetterParams,
  GridColumnHeaderTitle,
  GridColumnHeaderSortIcon,
} from "@mui/x-data-grid";
import data from "./data.json";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import FilterListIcon from "@mui/icons-material/FilterList";

console.log(data);
const columns: ColDef[] = [
  {
    field: "name",
    headerName: "Name",
    minWidth: 200,
    disableColumnMenu: false,
    renderHeader: (params) => {
      const { field, api, colDef } = params;
      return (
        <>
          <GridColumnHeaderTitle
            label={colDef.headerName || colDef.field}
            description={colDef.description}
            columnWidth={colDef.width}
          />
        </>
      );
    },
    // ColumnFilter:
    disableColumnFilter: true,
  },
  {
    field: "id",
    headerName: "Email Id",
    minWidth: 250,
    headerAlign: "center",
    align: "center",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    minWidth: 250,
    headerAlign: "center",
    align: "center",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "country",
    headerName: "Country",
    minWidth: 200,
    headerAlign: "center",
    align: "center",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "teachingStatus",
    headerName: "Teacher Status",
    minWidth: 200,
    headerAlign: "center",
    align: "center",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "action",
    headerName: "Action",
    minWidth: 200,
    headerAlign: "center",
    align: "center",
    sortable: false,
    disableColumnMenu: true,
  },
];
const rows = data.data.map((row) => {
  return {
    name: row.name,
    id: row.id,
    phone: row.phone,
    country: row.country,
    teachingStatus: row.teachingStatus,
    action: row.action,
  };
});
export default function Data_table(props) {
  const [selection, setselection] = useState([]);
  return (
    <div
      style={{
        height: "400px",
        // height: props.height,
        width: "95%",
        // display: "flex",
        // justifyContent: "centre",
        alignItems: "centre",
        // overflowY: "scroll",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
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
          "& .MuiDataGrid-iconButtonContainer1": {
            paddingLeft: "5px",
            color: "black",
          },
        }}
        hideFooter="true"
      />
    </div>
  );
}
