import axios from "axios"

const ENDPOINT = 'https://leetcode-stats-api.herokuapp.com/aky9821'

export interface StatsResponse {
    status: string
    message: string
    totalSolved?: number
    totalQuestions?: number
    easySolved?: number
    totalEasy?: number
    mediumSolved?: number
    totalMedium?: number
    hardSolved?: number
    totalHard?: number
    acceptanceRate?: number
    ranking?: number
    contributionPoints?: number
    reputation?: number
}

export const getStats = async (): Promise<StatsResponse> => {
    try {
        const response = await axios.get(`${ENDPOINT}`)
        return response.data as StatsResponse
    } catch {
        const errMsg = 'could not reach backend, try again later.'
        return { status: 'error', message: errMsg }
    }
}
