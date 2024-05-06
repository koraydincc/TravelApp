import React from 'react';
import { Layout, Row, Col } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ backgroundColor: '#001529', color: '#fff', padding: '50px 0' }}>
      <div style={{ textAlign: 'center' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={8}>
            <h3 style={{ color: '#fff' }}>İletişim Bilgileri</h3>
            <div>
              <MailOutlined /> example@example.com
            </div>
            <div>
              <PhoneOutlined /> +1234567890
            </div>
            <div>
              <EnvironmentOutlined /> Şehir, Ülke
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <h3 style={{ color: '#fff' }}>Hızlı Bağlantılar</h3>
            <div>
              <a href="#">Anasayfa</a>
            </div>
            <div>
              <a href="#">Hakkımızda</a>
            </div>
            <div>
              <a href="#">Hizmetlerimiz</a>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <h3 style={{ color: '#fff' }}>Sosyal Medya</h3>
            <div>
              <a href="#">Facebook</a>
            </div>
            <div>
              <a href="#">Twitter</a>
            </div>
            <div>
              <a href="#">Instagram</a>
            </div>
          </Col>
        </Row>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        Telif Hakkı © 2024 | TravelLingual
      </div>
    </Footer>
  );
};

export default AppFooter;
