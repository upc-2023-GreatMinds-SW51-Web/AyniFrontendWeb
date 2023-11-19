import ax from "axios";
import axios from "axios";

const http = axios.create({
    baseURL: 'http://jorgegc-001-site1.btempurl.com/api/v1'
})
export class OrdersService{
    getAll() { return http.get('/orders'); }
    create(data) { return http.post('/orders', data); }
    update(id, data) { return http.put(`/orders/${id}`, data); }
    delete(id) { return http.delete(`/orders/${id}`); }
    findByTitle(title) { return http.get(`/orders?name=${title}`); }
}