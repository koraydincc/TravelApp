import React, { useState } from 'react';
import { ContactsOutlined, HomeOutlined, ControlOutlined,ContainerOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'Anasayfa',
    key: 'Home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Seyahat Planı Ayarla',
    key: 'TravelPlanSettings',
    icon: <ControlOutlined />,
  },
  {
    label: 'Seyahat Planım',
    key: 'TravelPlan',
    icon: <ContainerOutlined />,
  },
  {
    label: 'Hakkımızda',
    key: 'About',
    icon: <ContactsOutlined />
  },

  
];
const Header = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{justifyContent:'center', padding:'10px'}} />;
};
export default Header;