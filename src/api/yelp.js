//axios must be downloaded and imported. axios is used to make http request
import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer 0TJOC5fL-rbAeA35nKXcplmFxy40Z4Xt2e7kHi36RGXd6NoV2PRT0gcemFiS4c_BWeXoR-Yq4FOmRWa9SNbOB-KfjgpiKl_gXM6ikQ0bwCSkAztdCe3m8Wil7EimXXYx'
    }
});

