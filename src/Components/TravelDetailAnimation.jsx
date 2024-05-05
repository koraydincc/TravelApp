import React from 'react';
import { Carousel } from 'antd';
import { useParams } from 'react-router-dom';

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#57AEFF',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'transparent',
};  

const App = () => {
  const params = useParams();
 
  return (
    <>
      <Carousel autoplay  arrows dotPosition="left" infinite={true}>
        <div>
          <h3 style={contentStyle}>{params.travelName}</h3>
          <p style={{ textAlign: 'center' }}>Seyahat adı: {params.travelName}</p>
        </div>
        <div>
          <h3 style={contentStyle}>Sonuçları Detaylı İncelemek İçin</h3>
          <p style={{ textAlign: 'center' }}>Seyahat sonuçlarını daha detaylı incelemek için incele butonuna tıklayın.</p>
        </div>
      
      </Carousel>
    </>
  );
};

export default App;
