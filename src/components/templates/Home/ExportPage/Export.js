import React, { useState } from "react";
import UiButton from "../../../UiCore/FormComponent/UiButton/UiButton";
import "./Export.css";
import * as XLSX from "xlsx/xlsx.mjs";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router-dom";
import { getDataByRegion } from "../../../../assets/apiCalls/ApiHomePage";
import { useQuery } from "@tanstack/react-query";
import Data_table from "../../Data_table/data_table";
import { GridToolbarQuickFilter } from "@mui/x-data-grid";
const addTotalTeachersFeild = (data) => {
  var temp = data.map((d) => {
    return {
      ...d,
      "Total Teachers":
        parseInt(d.Active || 0) +
        parseInt(d.Inactive || 0) +
        parseInt(d.ViewOnly || 0),
    };
  });
  return temp;
};
const getSelectedRowsData=(regionData,selectedRows)=>{
    return regionData.filter((data)=>selectedRows.includes(data.Country));
}

function Export() {
  const location = useLocation();
  const [selectedRows, setSelectedRows] = useState(location.state.selectedRows);
  const [selectedRegion, setSelectedRegion] = useState(location.state.selectedRegion);
  const { data: regionData } = useQuery(
    ["region-data", selectedRegion],
    getDataByRegion,
    {
      select: (data) => {
        return addTotalTeachersFeild(data.data);
      },
    }
  );
  const handleExportAllRows = () => {
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(regionData);
    XLSX.utils.book_append_sheet(wb, ws, "Teachers Data");
    XLSX.writeFile(wb, "AOL Teachers Information.xlsx");
  };
  const handleExportSelectedRows = ()=>{
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(getSelectedRowsData(regionData,selectedRows));
    XLSX.utils.book_append_sheet(wb, ws, "Teachers Data");
    XLSX.writeFile(wb, "AOL Teachers Information.xlsx");
  };

 
  const ExportPageToolBar=()=>{
    return (
      <ExportPageToolBarComponent  
      selectedRows={selectedRows}
      selectedRegion={selectedRegion}
      handleExportSelectedRows={handleExportSelectedRows}
      handleExportAllRows={handleExportAllRows}
      />
    )
  }

  return (
    <div className="export-outer-container">
      <div className="export-inner-container1">
        <div className="export-inner-container2">
          {
            regionData?(
              <Data_table
            data={regionData}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
            height={500}
            toolBar={ExportPageToolBar}
          />
            ):"Loading..."
          }

        </div>
      </div>
    </div>
  );
}

export default Export;



const ExportPageToolBarComponent=({selectedRegion,handleExportSelectedRows,handleExportAllRows,selectedRows})=>{
  const navigate=useNavigate();
  function handleClose() {
    navigate(-1);
  }
   return(
    <div>
            <div className="export-heading-container">
              <div className="export-heading">Region: {selectedRegion}</div>
              <div className="export-close">
                <div className="export-selection-number">
                  {selectedRows.length} records selected
                </div>
                <IconButton>
                  <CloseIcon fontSize="large" onClick={handleClose} />
                </IconButton>
              </div>
            </div>
            <div className="export-subheading-container">
              <div className="export-icon-left-container">
              <GridToolbarQuickFilter
                className="home-search"
                placeholder="Search by Country"
                variant="outlined"
              />
              </div>
              <div className="export-buttons-container">
                <UiButton
                  text="Export Selected Rows"
                  disabled={selectedRows.length != 0 ? false : true}
                  onClick={handleExportSelectedRows}
                ></UiButton>
                <UiButton
                  text="Export All Rows"
                  onClick={handleExportAllRows}
                ></UiButton>
              </div>
            </div>
          <hr className="hr-line"></hr>
          </div>
   )
}