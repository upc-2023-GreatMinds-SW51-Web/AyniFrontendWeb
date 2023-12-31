import axios from "axios";

const http = axios.create({
    baseURL: 'https://ayniweb.azurewebsites.net/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
})
export class ProfitsApiService{
    endPoint = 'profits'
    getAllProfits() {
        return http.get(`/${this.endPoint}`);
    }
    createProfit(data){
        return http.post(`/${this.endPoint}`, data);
    }
    deleteProfit(id){
        return http.delete(`/${this.endPoint}/${id}`);
    }
}