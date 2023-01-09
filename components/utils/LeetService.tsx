import axios from "axios"

export class LeetService {
    private static URL: string = 'https://leetcode-stats-api.herokuapp.com/aky9821'
    public static getStats() {
        let userURl:string=`${this.URL}`
            return axios.get(userURl)
    }
}