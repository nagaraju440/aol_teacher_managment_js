import React from "react";
import { useState, useEffect } from "react";
import {
  DataGrid} from "@mui/x-data-grid";
import data from "./data.json";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Menu, MenuItem } from "@mui/material";
export default function Data_table(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [rowData, setRowData] = React.useState([]);
  const [isParentSelectedRows,setIsParentSelectedRows]=useState(true)
  useEffect(()=>{
    setIsParentSelectedRows(false);
  },[])
  function handleSortHover(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }
  useEffect(() => {
    setRowData(props.data);
  }, [props.data]);

  function handleClose() {
    setAnchorEl(null);
  }
  const [selection, setselection] = useState([]);
  const rows = rowData.map((row) => {
    return {
      id: row.Country,
      active: row.Active || 0,
      inactive: row.Inactive || 0,
      viewonly: row.ViewOnly || 0,
      totalteachers:
        parseInt(row.Active || 0) +
        parseInt(row.Inactive || 0) +
        parseInt(row.ViewOnly || 0),
    };
  });

  const columns = [
    {
      field: "id",
      headerName: "Country",
      minWidth: 230,
      headerAlign: "left",
      align: "left",
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <span style={{ fontSize: "14px" }}>
            Country{" "}
            <IconButton>
              {" "}
              <FilterListIcon onMouseOver={handleSortHover} />{" "}
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{ marginTop: "8px" }}
                MenuListProps={{ onMouseLeave: handleClose }}
              >
                <MenuItem
                  onClick={() => {
                    setRowData(
                      rowData.sort((a, b) => {
                        // console.log(a, b);
                        const nameA = a.Country.toUpperCase(); // ignore upper and lowercase
                        const nameB = b.Country.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                          return -1;
                        }
                        if (nameA > nameB) {
                          return 1;
                        }
                        return 0;
                      })
                    );
                  }}
                >
                  A -> Z
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    props.data.sort((a, b) => {
                      // console.log(a, b);
                      const nameA = a.Country.toUpperCase(); // ignore upper and lowercase
                      const nameB = b.Country.toUpperCase(); // ignore upper and lowercase
                      if (nameA > nameB) {
                        return -1;
                      }
                      if (nameA < nameB) {
                        return 1;
                      }

                      // names must be equal
                      return 0;
                    });
                  }}
                >
                  {" "}
                  Z -> A
                </MenuItem>
              </Menu>
            </IconButton>
          </span>
        );
      },
    },
    {
      field: "active",
      headerName: "Active",
      minWidth: 190,
      headerAlign: "center",
      align: "center",
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "inactive",
      headerName: "Inactive",
      minWidth: 190,
      headerAlign: "center",
      align: "center",
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "viewonly",
      headerName: "View Only",
      minWidth: 190,
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
          Toolbar:props.toolBar
        }}
        rows={rows}
        columns={columns}
        disableColumnSelector={true}
        checkboxSelection
        sx={{
          ".MuiTableSortLabel-icon": {
            display: "block",
          },
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
          "MuiDataGrid-iconButtonContainer": {
            visibility: "visible",
          },
          ".MuiDataGrid-sortIcon": {
            opacity: "inherit !important",
            color: "black",
          },
          "& .MuiDataGrid-iconButtonContainer": {
            visibility: "visible !important",
          },
          "& .css-xa1zdc-MuiDataGrid-root .MuiDataGrid-menuOpen": {
            visibility: "visible",
            width: "auto",
          },
          "& .css-xa1zdc-MuiDataGrid-root .MuiDataGrid-menuIcon": {
            visibility: "visible",
          },
          "& .css-pvqpge-MuiDataGrid-root .MuiDataGrid-menuIcon ": {
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
        hideFooter={false}
        selectionModel={props.selectedRows}
        onSelectionModelChange={(newSelection)=>{
          /**
           * calling props.selectedRows only after completion of  intial render  with the help of isParentSelectRows, if we didn't this consotion it is doing empty the selectedRows also.
           */
         !isParentSelectedRows&&props.setSelectedRows(newSelection)
        }}
      />
    </div>
  );
}
