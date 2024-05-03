import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import CountryStatesSelect from './CountryStatesSelect';
import { useSelector, useDispatch } from 'react-redux'; // Importing useDispatch
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

const TravelAdd = () => {
  const [open, setOpen] = useState(false);
  const [travels, setTravels] = useState([]);
  const city = useSelector(state => state.travelData?.city);
  const country = useSelector(state => state.travelData?.country);
  const data = useSelector(state => state.travelData?.travelResult)
  const dispatch = useDispatch();
  console.log(data)
  const hideUserModal = () => {
    setOpen(false);
  };

  const onFinish = values => {
    const travelName = values['Seyahat Adı'];
    console.log('Seyahat Planı Adı:', travelName, 'Ülke:', country, 'Şehir:', city);
    setTravels([...travels, { travelName, country, city, data }]);
    dispatch(setTravelPlans(travels)); 
    setOpen(false);
  };

  const showTravelModal = () => {
    setOpen(true);
  };

  const handleCreateTravel = values => {
    setOpen(false);
  };


  return (
    <div>
      <Form
        {...layout}
        name="basicForm"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          name="Seyahat Adı"
          label="Seyahat Planına Bir İsim Ver"
          rules={[
            {
              required: true,
              message: 'Lütfen seyahat planının adını girin!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button htmlType="submit" type="primary">
            Seyahat Oluştur
          </Button>
          <Button
            htmlType="button"
            style={{
              margin: '0 8px',
            }}
            onClick={showTravelModal}
          >
            Konumu Ayarla
          </Button>
        </Form.Item>
      </Form>

      <Modal
        title="Seyahat Planı Konumu Ayarla"
        visible={open}
        onCancel={hideUserModal}
        footer={null}
      >
        <Form
          {...layout}
          name="modalForm"
          onFinish={handleCreateTravel}
        >
          <Form.Item label="Ülke" name="country" initialValue={country}>
            <CountryStatesSelect />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button htmlType="submit" type="primary">
              Kaydet
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TravelAdd;
