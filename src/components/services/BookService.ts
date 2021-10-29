import axios from 'axios';

// Creación de instancia de axios
const http = axios.create({
    baseURL: 'https://gutendex.com/',
    headers: {
      'Content-type': 'application/json'
    }
});

// Obtener página de 0-32 objetos
const getPage = (page: number) => {
    return http.get(`/books/?page=${page}`);
}

// Obtener documento específico
const get = (id: string) => {
    return http.get(`/books/${id}`);
};

const BookService = {
    getPage,
    get
}

export default BookService;