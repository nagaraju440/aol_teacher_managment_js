import React from "react";
import { useState, useEffect } from "react";
import {
  DataGrid,
  ColDef,
  ValueGetterParams,
  GridColumnHeaderTitle,
  GridColumnHeaderSortIcon,
} from "@mui/x-data-grid";
import data from "./data.json";
import { styled } from "@mui/system";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import FilterListIcon from "@mui/icons-material/FilterList";
import Tooltip from "@mui/material/Tooltip";
import { Menu, MenuItem } from "@mui/material";

// const columns: ColDef[] = [
//   // const columns = [
//   {
//     field: 'id',
//     headerName: 'Country',
//     minWidth: 130,
//     headerAlign: 'center',
//     align: 'center',
//     // disableColumnMenu: true
//     sortable: false,
//     disableColumnMenu: true,
//     renderHeader: () => {
//       return (
//         <span style={{ fontSize: '14px' }}>
//           Name{' '}
//           <IconButton>
//             {' '}
//             <FilterListIcon onMouseOver={handleSortHover} />{' '}
//             <Menu
//               id="simple-menu"
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleClose}
//               sx={{ marginTop: '8px' }}
//               MenuListProps={{ onMouseLeave: handleClose }}>
//               <MenuItem
//                 onClick={() => {
//                     props.data.sort((a, b) => {
//                       console.log(a, b);
//                       const nameA = a.id.country.toUpperCase(); // ignore upper and lowercase
//                       const nameB = b.id.country.toUpperCase(); // ignore upper and lowercase
//                       if (nameA < nameB) {
//                         return -1;
//                       }
//                       if (nameA > nameB) {
//                         return 1;
//                       }

//                       // names must be equal
//                       return 0;
//                     })

//                 }}>
//                 A -> Z
//               </MenuItem>
//               <MenuItem
//                 onClick={() => {
//                     props.data.sort((a, b) => {
//                       console.log(a, b);
//                       const nameA = a.id.Country.toUpperCase(); // ignore upper and lowercase
//                       const nameB = b.id.Country.toUpperCase(); // ignore upper and lowercase
//                       if (nameA > nameB) {
//                         return -1;
//                       }
//                       if (nameA < nameB) {
//                         return 1;
//                       }

//                       // names must be equal
//                       return 0;
//                     })
//                 }}>
//                 {' '}
//                 Z -> A
//               </MenuItem>
//             </Menu>
//           </IconButton>
//         </span>
//       );
//     }
//   },
//   {
//     field: 'active',
//     headerName: 'Active',
//     minWidth: 170,
//     headerAlign: 'center',
//     align: 'center',
//     sortable: false,
//     disableColumnMenu: true
//   },
//   {
//     field: 'inactive',
//     headerName: 'Inactive',
//     minWidth: 170,
//     headerAlign: 'center',
//     align: 'center',
//     sortable: false,
//     disableColumnMenu: true
//   },
//   {
//     field: 'viewonly',
//     headerName: 'View Only',
//     minWidth: 170,
//     headerAlign: 'center',
//     align: 'center',
//     sortable: false,
//     disableColumnMenu: true
//   },
//   {
//     field: 'totalteachers',
//     headerName: 'Total Teachers',
//     minWidth: 250,
//     headerAlign: 'center',
//     align: 'center',
//     sortable: false,
//     disableColumnMenu: true
//   }
// ];

export default function Data_table(props) {
  // console.log('rows selected', props.data.getSelectedRows);
  // console.log("props ** country->", props.data);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [rowData, setRowData] = React.useState([]);

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
  // const CustomDataGrid = styled(DataGrid)(() => ({
  //   '.MuiDataGrid-iconButtonContainer': {
  //     visibility: 'visible',
  //     width: '20px !important'
  //   }
  // }));

  // function CustomUnsortedIcon() {
  //   return <UnfoldMoreIcon />;
  // }
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
  // console.log('rows ++ country', rows);

  const columns: ColDef[] = [
    // const columns = [
    {
      field: "id",
      headerName: "Country",
      minWidth: 230,
      headerAlign: "left",
      align: "left",
      // disableColumnMenu: true
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => {
        // console.log('rows **', rows[0].id);
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

                        // names must be equal
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

  // const rows = props.data.map((row) => {
  //   return {
  //     id: row.Country,
  //     active: row.Active || 0,
  //     inactive: row.Inactive || 0,
  //     viewonly: row.ViewOnly || 0,
  //     totalteachers:
  //       parseInt(row.Active || 0) + parseInt(row.Inactive || 0) + parseInt(row.ViewOnly || 0)
  //   };
  // });
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
          // ColumnUnsortedIcon: CustomUnsortedIcon
          // ColumnMenu:
        }}
        rows={rows}
        columns={columns}
        disableColumnSelector={true}
        disableColumnFilter={true}
        // hideSortIcon={true}
        // autoShowColumnMenuIcon
        checkboxSelection
        sx={{
          ".MuiTableSortLabel-icon": {
            display: "block",
            // visibility: 'visible'
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
          // '& .css-wli113-MuiDataGrid-root .MuiDataGrid-menuIcon': {
          //   visibility: 'visible !important'
          // },
          // '& .css-1mujnne-MuiDataGrid-root .MuiDataGrid-menuIcon': {
          //   visibility: 'visible !important'
          // },

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
        hideFooter={false}
        selectionModel={selection}
        onSelectionModelChange={(newSelection) => {
          setselection(newSelection);
          props.getSelectedRows &&
            props.getSelectedRows(props.data, newSelection);
        }}
      />
    </div>
  );
}
