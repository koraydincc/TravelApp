import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal, Radio } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import CountryStatesSelect from './CountryStatesSelect';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaceData, travelCreate } from '../Store/Actions/travelDataActions';
import { setCity } from '../Store/Slices/travelDataSlice';

const CollectionCreateForm = ({ initialValues, onFormInstanceReady }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    onFormInstanceReady(form);
  }, []);

  

  return (
    <Form layout="vertical" form={form} name="form_in_modal" initialValues={initialValues}>
      <Form.Item
        name="title"
        label="Seyahatinize Bir İsim Verin"
        rules={[
          {
            required: true,
            message: 'Please input the title of collection!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item  label="Ülke ve Şehir Seçimi Yapın">
         <CountryStatesSelect/>
      </Form.Item>
    </Form>
  );
};

const CollectionCreateFormModal = ({ open, onCreate, onCancel, initialValues }) => {
  const [formInstance, setFormInstance] = useState();
  const city = useSelector(state => state.city);
  const country = useSelector(state => state.country);
  const data = useSelector(state=>state.travelResult)
  const dispatch = useDispatch()

  useEffect(() => {
    if (city && country) {
      dispatch(getPlaceData({location: city}))
    }
}, [dispatch, city, country])

  
  return (
    <Modal
      visible={open}
      title="Seyahat Planı Oluştur"
      okText="Oluştur"
      cancelText="İptal"
      okButtonProps={{
        autoFocus: true,
      }}
      onCancel={onCancel}
      destroyOnClose
      onOk={async () => {
        try {
          const values = await formInstance?.validateFields();
          

          const updatedValues = { ...values, city, country, data };

          onCreate(updatedValues);

          formInstance?.resetFields();
        } catch (error) {
          console.log('Failed:', error);
        }
      }}
    >
      <CollectionCreateForm
        initialValues={initialValues}
        onFormInstanceReady={(instance) => {
          setFormInstance(instance);
        }}
      />
    </Modal>
  );
};

const App = () => {
  const [formValues, setFormValues] = useState();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const travelResult = useSelector(state => state.travelResult);
  const city = useSelector(state => state.city);
  const country = useSelector(state => state.country);

  useEffect(() => {
    if (travelResult && city && country && formValues?.title) {
      dispatch(travelCreate({
        travelName: formValues?.title,
        city: city,
        country: country,
        data: travelResult
      }));
    }
  }, [dispatch, formValues]); // Bağımlılıkları güncelledik
  

  

  const onCreate = async (values) => {
    console.log('Received values of form: ', values);
    setFormValues(values);

    
    dispatch(getPlaceData({ location: values.city }));

    setOpen(false);

  };

  const handleCancel = () => {
    setFormValues(null); 
    setOpen(false); 
  };

  const handleCreateClick = () => {
    setOpen(true); 
  };
  
  return (
    <>
      <Button type="primary" icon={<PlusOutlined />} onClick={handleCreateClick}>
        Seyahat Oluştur
      </Button>
      <CollectionCreateFormModal
        open={open}
        onCreate={onCreate}
        onCancel={handleCancel} // Modal kapatıldığında çağrılacak fonksiyon
        initialValues={{
          modifier: 'public',
        }}
      />
    </>
  );
};


export default App;