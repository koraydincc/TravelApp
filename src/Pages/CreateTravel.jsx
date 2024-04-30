import React, { useState } from 'react';
import { List, Input, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setTravelData, setTravelResult } from '../Store/Slices/travelDataSlice';
import CountryStatesSelect from '../Components/CountryStatesSelect';
import TravelAdd from '../Components/TravelAdd';

const { Search } = Input;

const TravelPlanSettings = () => {
  const [venues, setVenues] = useState([]);
  const dispatch = useDispatch();
  const location = useSelector(state => state.travelData.city);

  const handleSearch = async () => {
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'fsq3K09rcSqI11V2b4J3PKADIblzI9/+4QTijASINK0i6jQ='
        }
      };

      const response = await fetch(`https://api.foursquare.com/v3/places/search?limit=50&near=${location}`, options);
      const data = await response.json();
      console.log(data);
      dispatch(setTravelResult(data));
      setVenues(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCitySelect = (selectedCity) => {
    // Seçilen şehri API'ye göndermek için kullanabilirsiniz
    console.log('Selected City:', selectedCity);
    // Örnek: handleSearch fonksiyonunu çağırarak API'ye gönderebiliriz
    handleSearch();
  };

  return (
    <Row style={{ display: 'flex', justifyContent: 'center', margin: '20px', height: '80%' }} justify="center">
      <Col xs={24} md={12}>
        <TravelAdd onSearch={handleSearch} /> 
        <CountryStatesSelect onCitySelect={handleCitySelect} />
        <List
          dataSource={venues}
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
