import React from "react";
import "./Allreg.css";
import Cards from "./Cards";
import { useQuery } from '@tanstack/react-query'
import { getAllRegionSummaryData, regionCountryData,getDataByRegion } from "../../../../assets/apiCalls/ApiHomePage";
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
  const {data:allRegionData}=useQuery(["all-region-data"],getDataByRegion,
  {
    select:(data)=>data.data,
    onSuccess:(data)=>{
      var temp = data.data.map((d) => {
        return {
          ...d,
          "Total Teachers":
            parseInt(d.Active || 0) +
            parseInt(d.Inactive || 0) +
            parseInt(d.ViewOnly || 0),
        };
      });
      allRegionData=temp;
    }
  }
  )





  // getDataByRegion

  console.log("region is",region_countryData,allRegionData)
  const [regionCountMap, setRegionCountMap] = useState({});


  useEffect(() => {
    const token = sessionStorage.getItem("user");
    let mounted = true;
    // console.log(region_countryData, regionData, "ALL THE DATA I NEED");
    const regionCountMap = {};
    if(allRegionData)
    {

    
    allRegionData.map((i) => {
      const itemRegionName = region_countryData.find(
        (item) => i.Country === item.countryname
      ).regionname;
      // console.log(
      //   region_countryData.find((item) => i.Country === item.countryname),
      //   "im here"
      // );
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
    // console.log(region_countryData, regionData, regionCountMap, 'ALL THE DATA I NEED');

    // console.log("regionCountMap-->", regionCountMap);

    //sorting
    // const sortObject = (o) =>
    //   Object.keys(o)
    //     .sort()
    //     .reduce((r, k) => ((r[k] = o[k]), r), {});
    // let sorted_regioncount = sortObject(regionCountMap);
    // console.log('sorting object', sorted_regioncount);
    // setRegionCountMap(sorted_regioncount);
    // console.log('sorting region count map ->', regionCountMap);

    if (Object.keys(regionCountMap).length != 0) {
      const sumValues = Object.values(regionCountMap).reduce((a, b) => a + b);
      // console.log("sum values", sumValues);
      setRegionCountMap({ "All Regions Count": sumValues, ...regionCountMap });
    }
    return () => (mounted = false);
  }, [region_countryData, allRegionData]);






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
  console.log("summary dtaa",summaryData)
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
        {
          summaryData?<Cards data={summaryData} regionCountMap={regionCountMap} />:<div>Loading...</div>
        }
        
      </div>
    </div>
  );
}

export default AllReg;
