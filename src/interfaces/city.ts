interface ICity {
    cityName: string
    stateCode: string
}

export interface ICityList {
    [index:number]:ICity
}