import React, { useState } from 'react';
import { ContactsOutlined, HomeOutlined, ControlOutlined,ContainerOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom'; 
const items = [
  {
    label: 'Anasayfa',
    key: 'Home',
    icon: <HomeOutlined />,
    path: '/' 
  },
  {
    label: 'Seyahat Planı Ayarla',
    key: 'TravelPlanSettings',
    icon: <ControlOutlined />,
    path: '/SeyahatPlaniOlustur' 
  },
  {
    label: 'Seyahat Planım',
    key: 'TravelPlan',
    icon: <ContainerOutlined />,
    path: '/SeyahatPlanlarim' 
  },
  {
    label: 'Hakkımızda',
    key: 'About',
    icon: <ContactsOutlined />,
    path: '/Hakkımızda' 
  }
];

const Header = () => {
  const [current, setCurrent] = useState('Home');
  const navigate = useNavigate(); 

  const onClick = (e) => {
    setCurrent(e.key);
    const item = items.find(item => item.key === e.key);
    if (item && item.path) {
    
      navigate(item.path);
    }
  };

  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" style={{justifyContent:'center', padding:'10px'}} >
      {items.map(item => (
        <Menu.Item key={item.key} icon={item.icon}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );
};

export default Header;
