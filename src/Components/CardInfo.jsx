import React from 'react';
import { Card, Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CardInfo = () => {
  const data = useSelector(state => state.selectedTravel); 
  const params = useParams()
  const rawData = data.results ?? data.data;

  const selectedData = rawData?.find((item) => {
      return item.fsq_id === params.fsqID
  })

  console.log(selectedData)
  return (
    <Row gutter={16}>
      <Col style={{ margin: '30px' }} span={16}>
        <Card style={{marginLeft:'50px'}} hoverable title="Adres Bilgileri " bordered={false}>
         
          {selectedData && ( 
            <div>
              <p>Mekan: {selectedData?.name}</p>
              <p>Adres: {selectedData?.location.address}</p>
              <p>Şehir: {selectedData?.location.locality}</p>
              <p>Ülke: {selectedData?.location.country}</p>
              <p>Açık Adres: {selectedData?.location.formatted_address}</p>
              <p>Posta Kodu: {selectedData?.location.postcode}</p>
 

         
            </div>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default CardInfo;
