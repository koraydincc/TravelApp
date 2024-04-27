const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://api.foursquare.com/v3/places/fsq_id',
  headers: {
    accept: 'application/json',
    Authorization: 'fsq3K09rcSqI11V2b4J3PKADIblzI9/+4QTijASINK0i6jQ='
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });