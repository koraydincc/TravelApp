import React from 'react';
import axios from 'axios';

const clientId = 'NP0DPO5Y0MNFHPZBCXRFM1J3KM3W1QJD2EYSN33ZLSALDCZP';
const redirectUri = 'NM1WOO4SJMBA00LYV54RFP22ZEWIQUT5MNAY4DXIANQCC5WD';

const handleOAuthRedirect = () => {
  const url = `https://foursquare.com/oauth2/authenticate?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}`;
  window.location.href = url;
};

const Auth = () => {
  return (
    <div>
      <button onClick={handleOAuthRedirect}>Foursquare'e Giriş Yap</button>
    </div>
  );
};

export default Auth;
