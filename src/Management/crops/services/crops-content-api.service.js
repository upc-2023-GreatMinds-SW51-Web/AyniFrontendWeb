import axios from "axios";

const http = axios.create({
    baseURL: 'https://my-json-server.typicode.com/JorgeGonzales15/AyniFakeApi'
})
export class CropsContentApiService{
    endPoint = 'products'
    getAll() {
        return http.get(`/${this.endPoint}`);
    }
}