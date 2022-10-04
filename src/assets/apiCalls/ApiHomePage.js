import {request} from '../../Utils/axios-utils.ts'

export const getDataByRegion=({queryKey})=>{
    const region=queryKey[1];
    return request({
        url:'/home/countriesdata',
        method:'GET',
        params: { region: region},
    })
}

export const getAllRegionSummaryData=()=>{
    return request({
        url:'/home/masterdata',
        method:"GET",
    })
}

export const regionCountryData=()=>{
    return request({
        url:'/home/regions',
        method:"GET"
    })
}