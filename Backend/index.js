const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/places', async (req, res) => {
  try {
    const location = req.query.location;
    const clientId = 'NP0DPO5Y0MNFHPZBCXRFM1J3KM3W1QJD2EYSN33ZLSALDCZP';
    const clientSecret = 'NM1WOO4SJMBA00LYV54RFP22ZEWIQUT5MNAY4DXIANQCC5WD';
    const accessToken = 'fsq3K09rcSqI11V2b4J3PKADIblzI9/+4QTijASINK0i6jQ=';

    const response = await axios.get('https://api.foursquare.com/v3/places/search', {
      params: {
        near: location,
        client_id: clientId,
        client_secret: clientSecret,
        v: '20240101', // YYYYMMDD formatında tarih (şu anki tarih)
      },
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
