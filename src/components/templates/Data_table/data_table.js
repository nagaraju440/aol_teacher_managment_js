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
    field: "id",
    headerName: "Country",
    minWidth: 130,
    disableColumnMenu: false,

    // disableColumnSelector:true,
    renderHeader: (params) => {
      const { field, api, colDef } = params;
      return (
        <>
          <GridColumnHeaderTitle
            label={colDef.headerName || colDef.field}
            description={colDef.description}
            columnWidth={colDef.width}
          />
          {
            <div className="MuiDataGrid-iconButtonContainer1">
              <IconButton>
                <FilterListIcon className="MuiDataGrid-sortIcon" />
              </IconButton>
            </div>
          }
        </>
      );
    },
    // ColumnFilter:
    disableColumnFilter: true,
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
const rows = data.data.map((row) => {
  return {
    id: row.id,
    active: row.active,
    inactive: row.inactive,
    viewonly: row.viewonly,
    totalteachers: row.totalteachers,
  };
});
export default function Data_table(props) {
  const [selection, setselection] = useState([]);
  return (
    <div
      style={{
        // height: "400px",
        height: props.height,
        width: "100%",
        // overflowY: "scroll",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
<<<<<<< HEAD


        disableColumnSelector={true}
        disableColumnFilter={true}
        componentsProps={{
          columnMenu: {
            IconButton:{
                
            },
            sx: {
              /* style allied to the column menu */
              // backgroundColor: "orange" // for example
              Text:"A-Z"
            }
          }
        }}
        // localeText={"A-Z"}
        // initialState={{
        //   sorting:{
        //     sortModel:[
        //       {
        //         field: 'commodity',
        //         sort:"A-Z",
        //         label:"A-Z"
        //       }
        //     ]
        //   }
        // }}
        // pageSize={5}
        // rowsPerPageOptions={[6]}
=======
        // pageSize={5}
        // rowsPerPageOptions={[10]}
>>>>>>> 52a5fc877ee79beda21d160e1d3123432d9f461d
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
          "& .MuiDataGrid-iconButtonContainer1": {
            paddingLeft: "5px",
            color: "black",
          },
        }}
        hideFooter="true"
        onSelectionModelChange={(newSelection) => {
          console.log(newSelection, "hsdmhdkjwa");
          setselection(newSelection);
        }}
      />
    </div>
  );
}
