import React from 'react';
import { Row, Col } from 'antd'; 
import HomePageContent from '../Components/HomePageContent';

function HomePage() {
  return (
        <Row justify="center">
          <Col span={24}>
            <HomePageContent/>
          </Col>
        </Row>
  );
}

export default HomePage;
