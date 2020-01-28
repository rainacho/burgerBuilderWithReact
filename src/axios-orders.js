import axios from 'axios' ;

const instance = axios.create({
    baseURL: 'https://spring-duality-207521.firebaseio.com/'
});

export default instance;