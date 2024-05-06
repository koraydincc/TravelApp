import React from 'react';
import { Button, Space, Table, Tag, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {  InfoCircleOutlined } from '@ant-design/icons';
import { getPlacePhoto, getPlaceTips } from '../Store/Actions/travelDataActions';
import { useNavigate, useParams } from 'react-router-dom';


const TravelPlacesTable = () => {
   const places = useSelector(state => state.selectedTravel)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const params = useParams()
   const rawData = places.data ?? places.results;

   const getPlaceDetail = (record) => {
    const selectedPlace = rawData?.find((item) => {
       console.log(record)
        return item.fsq_id === record.fsqID;
    });
    dispatch(getPlaceTips({fsqID: selectedPlace.fsq_id}))
    dispatch(getPlacePhoto({fsqID: selectedPlace.fsq_id}))
    navigate(`/SeyahatPlanimDetay/${params.travelName}/${selectedPlace.fsq_id}`)
    
}

  const columns = [
    {
      title: 'Adı',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => <a href={record.link}>{text}</a>,
    },
    {
      title: 'Kategori',
      dataIndex: 'category',
      key: 'category',
      render: (categories) => (
        <>
          {categories.map((category) => (
            <Tag key={category.id} color="blue">
              {category.name}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: 'Konum',
      dataIndex: 'location',
      key: 'location',
      render: (location) => `${location.locality}, ${location.region}`,
    },
    {
      title: 'Mesafe (KM)',
      dataIndex: 'distance',
      key: 'distance',
    },
    {
      title: 'Aksiyon',
      key: 'action',
      render: (_, record) => (

        <Space size="middle">
        <Button onClick={() => getPlaceDetail(record)}> 
           <Tooltip title="Detaylı Bilgi Almak İçin Tıklayın">
             <InfoCircleOutlined style={{ color: '#1890ff' }} />
           </Tooltip> Detaylı İncele
       </Button>
        </Space>
      ),
    },
    
  ];



  const data = rawData?.map((place, index) => ({
    key: index,
    name: place.name,
    category: place.categories,
    location: place.location,
    distance: place.distance,
    fsqID: place.fsq_id,
    link: `https://www.foursquare.com${place.link}`, 
  }));

  return <Table columns={columns} dataSource={data} />;
};

export default TravelPlacesTable;
