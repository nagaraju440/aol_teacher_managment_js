import React from "react";
import "./Allreg.css";
import Cards from "./Cards";
import { useQuery } from '@tanstack/react-query'
import { getAllRegionSummaryData, regionCountryData,getDataByRegion } from "../../../../assets/apiCalls/ApiHomePage";
import {useState,useEffect} from 'react'
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
function AllReg(props) {
  const {data:summaryData}=useQuery(["summary-data"],getAllRegionSummaryData,
  {
    select:(data)=>data.data
  }
  )
  const {data:region_countryData}=useQuery(["region-country-names"],regionCountryData,
  {
    select:(data)=>data.data
  }
  )
  const {data:allRegionData}=useQuery(["region-data","All Regions"],getDataByRegion,
  {
    select:(data)=>{return addTotalTeachersFeild(data.data)},
  }
  )

  const [regionCountMap, setRegionCountMap] = useState({});
  useEffect(() => {
    const token = sessionStorage.getItem("user");
    let mounted = true;
    const regionCountMap = {};
    if(allRegionData)
    {
    allRegionData.map((i) => {
      const itemRegionName = region_countryData.find(
        (item) => i.Country === item.countryname
      ).regionname;
      if (regionCountMap[itemRegionName]) {
        regionCountMap[itemRegionName] =
          regionCountMap[itemRegionName] +
          +i.Active +
          +i.Inactive +
          +i.ViewOnly;
      } else {
        regionCountMap[itemRegionName] = +i.Active + +i.Inactive + +i.ViewOnly;
      }
    });
  }
    if (Object.keys(regionCountMap).length != 0) {
      const sumValues = Object.values(regionCountMap).reduce((a, b) => a + b);
      setRegionCountMap({ "All Regions Count": sumValues, ...regionCountMap });
    }
    return () => (mounted = false);
  }, [region_countryData, allRegionData]);

  return (
    <div className="Background">
      <div className="AllReg-outer-contanier">
        <div className="AllReg-inner-container1">
          <div className="AllReg-inner-container2">
            <h3>All Regions Summary</h3>
          </div>
        </div>
      </div>
      <div className="All-Cards-Container">
        {
          summaryData?<Cards data={summaryData} regionCountMap={regionCountMap} />:<div>Loading...</div>
        }
        
      </div>
    </div>
  );
}

export default AllReg;
