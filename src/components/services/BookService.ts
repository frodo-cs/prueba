import axios from 'axios';

const http = axios.create({
    baseURL: 'https://gutendex.com/',
    headers: {
      'Content-type': 'application/json'
    }
});

const getPage = (page: number) => {
    return http.get(`/books/?page=${page}`);
}

const get = (id: string) => {
    return http.get(`/books/${id}`);
};

const BookService = {
    getPage,
    get
}
export default BookService;