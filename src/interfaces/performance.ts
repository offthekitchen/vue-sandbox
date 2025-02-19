export interface IPerformance {
    performanceId: number
    venue: string
    cityName: string
    stateCode: string
}

export interface IPerformances {
    performances: IPerformance[]
}