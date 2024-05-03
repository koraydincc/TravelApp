import React, { useState } from 'react';
import { List, Input, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setTravelData, setTravelResult } from '../Store/Slices/travelDataSlice';
import CountryStatesSelect from '../Components/CountryStatesSelect';
import TravelAdd from '../Components/TravelAdd';

const { Search } = Input;

const TravelPlanSettings = () => {

 

  return (
    <Row style={{ display: 'flex', justifyContent: 'center', margin: '20px', height: '80%' }} justify="center">
      <Col xs={24} md={12}>
        <TravelAdd />
        <List
          dataSource={""}
          renderItem={item => (
            <List.Item>
              {item.name}
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default TravelPlanSettings;
