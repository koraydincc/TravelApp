import React, { useEffect } from 'react';
import { List, Input, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import TravelAdd from '../Components/TravelAdd';
import { getPlaceData } from '../Store/Actions/travelDataActions';
import TravelPlansTable from '../Components/TravelPlansTable';

const { Search } = Input;

const TravelPlanSettings = () => {
    const location = useSelector(state => state.travelData?.city);
    const data = useSelector(state => state.travelData?.travelPlans);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlaceData({ location: location }));
    }, [dispatch, location]); 
   console.log(location)
    return (
        <Row style={{ display: 'flex', justifyContent: 'center', margin: '20px', height: '80%' }} justify="center">
            <Col xs={24} md={12}>
                <TravelAdd />
                <TravelPlansTable data={data} /> 
            </Col>
        </Row>
    );
};

export default TravelPlanSettings;
