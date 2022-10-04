import React from "react";
import "./Allreg.css";
import Cards from "./Cards";
import { useQuery } from '@tanstack/react-query'
import { getAllRegionSummaryData, regionCountryData } from "../../../../assets/apiCalls/ApiHomePage";
import {useState,useEffect} from 'react'
function AllReg(props) {
  const {data:summaryData}=useQuery(["summary-data"],getAllRegionSummaryData,
  {
    select:(data)=>data.data
  }
  )
  const {data:region_countryData}=useQuery(["region-data"],regionCountryData,
  {
    select:(data)=>data.data
  }
  )
  console.log("region",region_countryData)
  const [regionCountMap, setRegionCountMap] = useState({});
  // useEffect(() => {
  //   let mounted = true;
  //   const regionCountMap = {};
  //   summaryData.map((i) => {
  //     const itemRegionName = region_countryData.find(
  //       (item) => i.Country === item.countryname
  //     ).regionname;
  //     if (regionCountMap[itemRegionName]) {
  //       regionCountMap[itemRegionName] =
  //         regionCountMap[itemRegionName] +
  //         +i.Active +
  //         +i.Inactive +
  //         +i.ViewOnly;
  //     } else {
  //       regionCountMap[itemRegionName] = +i.Active + +i.Inactive + +i.ViewOnly;
  //     }
  //   });

  //   if (Object.keys(regionCountMap).length != 0) {
  //     const sumValues = Object.values(regionCountMap).reduce((a, b) => a + b);
  //     setRegionCountMap({ "All Regions Count": sumValues, ...regionCountMap });
  //   }
  //   return () => (mounted = false);
  // }, [region_countryData, summaryData]);
  console.log("summary dtaa us",summaryData)
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
        {/* <Cards data={props.data} regionCountMap={props.regionCountMap} /> */}
      </div>
    </div>
  );
}

export default AllReg;
