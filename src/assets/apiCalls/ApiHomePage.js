import {request} from '../../Utils/axios-utils.ts'

export const getDataByRegion=({queryKey})=>{
    const region=queryKey[1];
    return request({
        url:'/home/countriesdata',
        method:'GET',
        params: { region: region},
    })
}