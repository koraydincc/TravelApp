import React from 'react';
import { Carousel, Col, Row } from 'antd';
import Logo from '../Assets/TransparentLogo.png';
import HomePagePost from '../Assets/HomePagePost1.png';
import HomePagePost2 from '../Assets/HomePagePost2.png';

const contentStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '40VH',
  color: '#fff',
  textAlign: 'center',
  backgroundColor: 'transparent',
  borderRadius: '10px',
};

const HomePageCarousel = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Carousel autoplay style={{ width: '100%', maxWidth: '1200px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 style={{ ...contentStyle, display: 'flex', flexDirection: 'column' }}>
          <Row align="middle">
            <Col span={12}>
              <img src={Logo} alt="" style={{ verticalAlign: 'middle', maxWidth: '100%' }} />
            </Col>
            <Col span={12}>
              <div style={{ padding: '20px', justifyContent: 'center', borderRadius: '10px' }}>
                <p style={{ color: '#051D40', fontSize: '18px' }}>Dünya çapında seyahat etmeyi planlıyor musunuz? TravelLingual size yol gösterecek! En iyi seyahat fırsatları, gezilecek yerler ve dil okulları hakkında bilgi alın.</p>
                <p style={{ color: '#051D40', fontSize: '16px', fontStyle: 'italic' }}>Hayatınızdaki maceraya bir adım daha yakınsınız!</p>
              </div>
            </Col>
          </Row>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <Row>
            <Col span={12}>
              <img src={HomePagePost} alt="" style={{ maxWidth: '100%', height: '30rem', borderRadius:'10px' }} />
            </Col>
            <Col span={12}>
              <img src={HomePagePost2} alt="" style={{ maxWidth: '100%', height: '30rem', borderRadius:'10px' }} />
            </Col>
          </Row>
        </h3>
      </div>
    </Carousel>
  </div>
);

export default HomePageCarousel;
