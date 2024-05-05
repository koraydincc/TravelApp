import React from 'react';
import { Table, Tag } from 'antd';
import { useSelector } from 'react-redux';

const TravelPlacesTable = () => {
   const places = useSelector(state => state.selectedTravel)

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => <a href={record.link}>{text}</a>,
    },
    {
      title: 'Category',
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
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      render: (location) => `${location.locality}, ${location.region}`,
    },
    {
      title: 'Distance (m)',
      dataIndex: 'distance',
      key: 'distance',
    },
  ];

  const data = places.results.map((place, index) => ({
    key: index,
    name: place.name,
    category: place.categories,
    location: place.location,
    distance: place.distance,
    link: `https://www.foursquare.com${place.link}`, // Assuming the link starts with /v3/places
  }));

  return <Table columns={columns} dataSource={data} />;
};

export default TravelPlacesTable;
