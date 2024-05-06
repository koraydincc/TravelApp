import React, { useEffect, useState } from 'react';
import { Avatar, List, notification } from 'antd';
import VirtualList from 'rc-virtual-list';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaceTips } from '../Store/Actions/travelDataActions';

const ContainerHeight = 400;

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return new Date(dateString).toLocaleDateString('tr-TR', options);
};

const getRandomUserAvatar = () => {
  return `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`;
};

const App = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaceTips({ fsqID: params.fsqID }));
  }, [dispatch, params.fsqID]);

  const appendData = () => {
    notification.info({
        message: 'Tüm yorumlar gösterildi',
      });
  };

  const data = useSelector(state => state.selectedTravelPlace);

  const onScroll = (e) => {
    if (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - ContainerHeight) <= 1) {
      appendData();
    }
  };

  return (
    <div >
      <List style={{ width: '60%', marginLeft:'80px'}}>
        <VirtualList
          data={data}
          height={ContainerHeight}
          itemHeight={47}
          itemKey="email"
          onScroll={onScroll}
        >
          {(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={getRandomUserAvatar()} />} 
                title={item.text}
                description={formatDate(item.created_at)}
              />
            </List.Item>
          )}
        </VirtualList>
      </List>
    </div>
  );
};

export default App;
