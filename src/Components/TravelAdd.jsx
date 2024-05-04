import React, { useEffect, useState } from 'react';
import { Avatar, Button, Form, Input, Modal, Space, Typography } from 'antd';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import CountryCitySelect from './CountryStatesSelect';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaceData } from '../Store/api/foursquare';
import { setTravelPlans } from '../Store/Slices/travelDataSlice';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const App = () => {
  const [open, setOpen] = useState(false);
  const [travelName, setTravelName] = useState(''); // Define travelName state

  const country = useSelector(state => state.country);
  const city = useSelector(state => state.city);

  const dispatch = useDispatch();

  console.log(city);

  const showUserModal = () => {
    setOpen(true);
  };

  const hideUserModal = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    const travelName = values.travelName;
    console.log(values);
    console.log('Finish:', values);

    if (travelName && city && country) {
      const travel = { city: city, country: country, travelName: travelName };
      dispatch(setTravelPlans(travel));
    }
  };

  const handleCityCountryChange = (selectedCountry, selectedCity) => {
    dispatch(getPlaceData(selectedCity));
  };

  return (
    <Form.Provider
      onFormFinish={(name, { values, forms }) => {
        console.log(values);
        if (name === 'basicForm') {
          const { basicForm } = forms;
          const travels = basicForm.getFieldValue('travel') || [];
          console.log(city);
          basicForm.setFieldsValue({
            travel: [...travels, { city: city, country: country, travelName: travelName }],
          });
          setOpen(false);
        }
      }}
    >
      <Form
        {...layout}
        name="basicForm"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          name="travelName"
          label="Gezinize Bir İsim Verin"
          value="travelName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="travel" hidden />

        <Form.Item {...tailLayout}>
          <Button htmlType="submit" type="primary">
            Gönder
          </Button>
          <Button
            htmlType="button"
            style={{
              margin: '0 8px',
            }}
            onClick={showUserModal}
          >
            Ülke ve Şehir Seç
          </Button>
        </Form.Item>
      </Form>

      <Modal
        title="Seyahat Planı Oluştur"
        visible={open}
        onCancel={hideUserModal}
        footer={[
          <Button key="cancel" onClick={hideUserModal}>İptal</Button>,
          <Button key="submit" type="primary" onClick={hideUserModal}>Kaydet</Button>
        ]}
      >
        <CountryCitySelect onChange={handleCityCountryChange} />
      </Modal>

    </Form.Provider>
  );
};

export default App;
