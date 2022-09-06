import React from 'react'
// import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import data from './data.json'
console.log(data);
const columns = [
    { field: 'id', headerName: 'country', minWidth: 130,disableColumnMenu:true,},
    { field: 'active', headerName: 'Active', minWidth: 150 ,headerAlign: 'center',align:'center',sortable:false,disableColumnMenu:true},
    { field: 'inactiveNT', headerName: 'Inactive-Not Teaching', minWidth: 220,headerAlign: 'center',align:'center',sortable:false,disableColumnMenu:true},
    {
      field: 'inactiveNOrg',
      headerName: 'Inactive-Not with Organization',
      minWidth: 270,headerAlign: 'center',align:'center',sortable:false,disableColumnMenu:true
    },
    {
        field: 'inactiveRKTM',
        headerName: 'Inactive-returned Kriya tape & Manual',
        minWidth: 320,headerAlign: 'center',align:'center',sortable:false,disableColumnMenu:true
      },
      {
        field: 'inactiveD',
        headerName: 'Inactive - Deceased',
        minWidth: 220,headerAlign: 'center',align:'center',sortable:false,disableColumnMenu:true
      },
  ];
const rows=data.data.map((row)=>{
    return{
        id:row.id,
        active:row.active,
        inactiveNT:row.inactiveNT,
        inactiveNOrg:row.inactiveNOrg,
        inactiveRKTM:row.inactiveRKTM,
        inactiveD:row.inactiveD
    }
})
export default function Data_table() {
    // const [selection, setselection] = useState([])
    // const [selection, setSelection] = useState()
    // const [selection, setSelection] = useState([])
  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
    rows={rows}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[6]}
    checkboxSelection
      sx={{
        '.MuiDataGrid-columnSeparator': {
          display: 'none',
        },
        '&.MuiDataGrid-root': {
          border: 'none',
        },
        '.MuiDataGrid-columnHeader':{
            fontSize:16,
            fontWeight:'bold'
        },
        '.MuiDataGrid-sortIcon': {
            opacity: 'inherit !important',
           },
        '& .MuiDataGrid-iconButtonContainer':{
            visibility: 'visible !important',
        },
      }}
      onSelectionChange={(newSelection) => {
        console.log(newSelection.rows,'hsdmhdkjwa');
        // setSelection(newSelection.rows);
    }}
    />
  </div>
  )
}
