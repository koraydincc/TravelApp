import React, { useState } from 'react';
import { Select, Space } from 'antd';
import { connect } from 'react-redux'; // Connect import edildi
import { setCity, setCountry } from '../Store/Slices/travelDataSlice'; // Redux eylemi

import countryData from '../data.json';

const { Option } = Select;

const CountryStatesSelect = ({ dispatch, onCitySelect }) => { // Dispatch props olarak alındı
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    setSelectedState(null); 
    dispatch(setCountry(value)); // Redux'a seçilen ülke bilgisini yolla
  };
  
  const handleStateChange = (value) => {
    setSelectedState(value);
    dispatch(setCity(value)); // Redux'a seçilen şehir bilgisini yolla
    // Seçilen şehri API'ye göndermek için onCitySelect fonksiyonunu çağır
    onCitySelect(value);
  };

  return (
    <Space direction="vertical">
      <Select
        name='country'
        placeholder="Ülke Seçin"
        onChange={handleCountryChange}
        style={{ width: 200 }}
      >
        {countryData.map((country) => (
          <Option key={country.name} value={country.name}>
            {country.name}
          </Option>
        ))}
      </Select>
      {selectedCountry && (
        <Select
          name='city'
          placeholder="Şehir Seçin"
          onChange={handleStateChange}
          style={{ width: 200 }}
        >
          {countryData
            .find((country) => country.name === selectedCountry)
            .states.map((state) => (
              <Option key={state.id} value={state.name}>
                {state.name}
              </Option>
            ))}
        </Select>
      )}
    </Space>
  );
};

export default connect()(CountryStatesSelect); // connect kullanıldı ve dispatch prop'u alındı
