//axios must be downloaded and imported. axios is used to make http request
import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer MYYELPAPIKEY'
    }
});

