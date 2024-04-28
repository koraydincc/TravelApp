import React, { useEffect, useRef, useState } from 'react';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input, InputNumber, Modal, Space, Typography } from 'antd';
import CountryStatesSelect from './CountryStatesSelect'; 
import { useSelector } from 'react-redux';

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

const useResetFormOnCloseModal = ({ form, open }) => {
  const prevOpenRef = useRef();
  useEffect(() => {
    prevOpenRef.current = open;
  }, [open]);
  const prevOpen = prevOpenRef.current;
  useEffect(() => {
    if (!open && prevOpen) {
      form.resetFields();
    }
  }, [form, prevOpen, open]);
};

const ModalForm = ({ open, onCancel, onSave }) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    open,
  });
  const onOk = () => {
    form.submit();
  };
  const onFinish = (values) => {
    onSave(values);
  };
  return (
    <Modal title="Seyahat Planı Oluştur" open={open} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical" name="userForm" onFinish={onFinish}>
         <CountryStatesSelect form={form} />
      </Form>
    </Modal>
  );
};

const TravelAdd = () => {
  const [open, setOpen] = useState(false);
  const [travels, setTravels] = useState([]);
  const city = useSelector(state => state.travelData.city);
  const country = useSelector(state => state.travelData.country);
  
  
  
  


  console.log(city)
  
  const hideUserModal = () => {
    setOpen(false);
  };

const onFinish = (values) => {
  const travelName = values.group;
  console.log('Seyahat Planı Adı:', travelName, 'Ülke:', country, 'Şehir:', city);
};


  const showTravelModal = () => {
    setOpen(true);
  };

  const handleCreateTravel = (values) => {
    const travelName = values.group;
    setTravels([...travels, { travelName, country, city }]);
    setOpen(false);
  };
  

  return (
    <div>
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          if (name === 'userForm') {
            const { basicForm } = forms;
            const travelName = basicForm.getFieldValue('group');
            basicForm.setFieldsValue({
              group: travelName,
            });
            setTravels([...travels, { travelName, country, city }]);
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
            name="group"
            label="Seyahat Planına Bir İsim Ver"
            rules={[
              {
                required: true,
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
      </Form.Provider>

      <ModalForm open={open} onCancel={hideUserModal} onSave={handleCreateTravel} />
    </div>
  );
};

export default TravelAdd;
