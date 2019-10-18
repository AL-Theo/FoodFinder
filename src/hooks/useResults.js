import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'asbury park'
            }
        });
            setResults(response.data.businesses)
        } 
            catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    //useEffect we use it to run code just one time or multiple times depending on second argument []
    useEffect(() => {
       searchApi(''); 
    }, []);

    return [searchApi, results, errorMessage];
};