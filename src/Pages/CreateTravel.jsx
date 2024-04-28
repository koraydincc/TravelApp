import React, { useState } from 'react';
import { List, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setTravelData } from '../Store/Slices/travelDataSlice';

const { Search } = Input;

const TravelPlanSettings = () => {
  const [location, setLocation] = useState('');
  const [venues, setVenues] = useState([]);
  const travelData = useSelector(state => state.travelData);
  const dispatch = useDispatch();

  console.log(travelData);

  const handleSearch = async () => {
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'fsq3K09rcSqI11V2b4J3PKADIblzI9/+4QTijASINK0i6jQ='
        }
      };

      const response = await fetch(`https://api.foursquare.com/v3/places/search?limit=50&query=${location}`, options);
      const data = await response.json();
      console.log(data);
      
      // Güncellenmiş veriyi state'e kaydet
      setVenues(data.results);
      
      // Redux store'a veriyi gönder
      dispatch(setTravelData(data.results));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Search
        placeholder="Lütfen bir konum girin"
        allowClear
        enterButton="Ara"
        size="large"
        onSearch={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <List
        bordered
        dataSource={venues}
        renderItem={item => (
          <List.Item>
            {item.name}
          </List.Item>
        )}
      />
    </div>
  );
};

export default TravelPlanSettings;
