import React from "react";
import UiButton from "../../../UiCore/FormComponent/UiButton/UiButton";
import "./HomePage.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import Data_table from "../../Data_table/data_table";
import { GridToolbarQuickFilter } from "@mui/x-data-grid";
import { getDataByRegion } from "../../../../assets/apiCalls/ApiHomePage";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import AllReg from "../All_register/Alreg";
const regions = [
  "All Regions",
  "Africa",
  "Brazil",
  "Central Asia",
  "Europe",
  "Far East",
  "Middle East",
  "North America",
  "Oceania",
  "Russia",
  "South America",
  "South Asia",
];
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
function HomePage() {
  const [selectedRegion, setSelectedRegion] = React.useState(0);
  const queryClient = useQueryClient();
  /**
   * fetching data table data using react query.
   */
  const { data: regionData } = useQuery(
    ["region-data", regions[selectedRegion]],
    getDataByRegion,
    {
      select: (data) => {
        return addTotalTeachersFeild(data.data);
      },
    }
  );
  const handleChangeSelect = (e) => {
    setSelectedRegion(e.target.value);
    queryClient.invalidateQueries(["region-data"]);
  };
  /**
   * @returns it returns a toolbar for home page data table.
   */
  const HomePageToolBar = () => {
    return (
      <HomePageToolBarComponent
        selectedRegion={selectedRegion}
        handleChangeSelect={handleChangeSelect}
      />
    );
  };
  return (
    <div>
      <div className="home-inner-container1">
        <div className="home-inner-container2">
          {regionData ? (
            <Data_table
              data={regionData}
              height={500}
              toolBar={HomePageToolBar}
            />
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
      <div className="summary-container">
          <div>
            <AllReg  />
          </div>
      </div>
    </div>
  );
}
export default HomePage;

const HomePageToolBarComponent = ({ selectedRegion, handleChangeSelect }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="home-icon">
          <div className="home-icon-left-container">
            <div>
              <h3>Home</h3>
            </div>
            <div className="slect-dropdown-container">
              <Select
                sx={{ height: 40 }}
                className="select-dropdown"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="region"
                value={selectedRegion}
                onChange={handleChangeSelect}
                defaultValue={10}
              >
                {regions.map((region, index) => (
                  <MenuItem value={index} key={index}>
                    {region}
                  </MenuItem>
                ))}
              </Select>
              <GridToolbarQuickFilter
              // style={{height:"50px"}}
                // sx={{ height: 0 }}
                className="home-search"
                placeholder="Search by Country"
                variant="outlined"
              />
            </div>
          </div>
          <div className="home-export-add-container">
            <UiButton
              text="Export"
              onClick={() => {
                navigate("/home/export", {
                  state: {
                    /**
                     * here we have  to send one more data whihch is region data and we need to change all regions with selectbox value , check Home page copy for refrence
                     */
                    selectedRegion: "All Regions",
                  },
                });
              }}
            ></UiButton>
            <div>
              <UiButton
                onClick={() => navigate("/teachers/new")}
                text={"Add Teacher"}
              ></UiButton>
            </div>
          </div>
        </div>
        <hr className="hr-line"></hr>
      </div>
    </div>
  );
};
