import React from 'react';
import { Row, Col } from 'antd';
import TravelAdd from '../Components/TravelAdd';
import TravelPlansTable from '../Components/TravelPlansTable';

const CreateTravel = () => {

    
    return (
        <Row style={{ margin: '20px 0', justifyContent: 'center' }} justify="center">
            <Col xs={24} md={12}>
                <TravelAdd />
                <div style={{ margin: '20px 0' }}>
                    <TravelPlansTable />
                </div>
            </Col>
        </Row>
    );
};

export default CreateTravel;
