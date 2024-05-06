import React, { useEffect, useState } from 'react';
import { ContactsOutlined, HomeOutlined, ControlOutlined, ContainerOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedTravel } from '../Store/Actions/travelDataActions';

const Header = () => {
  const [current, setCurrent] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch()
  const data = useSelector(state => state.travelPlans);

  useEffect(() => {
    const pathname = location.pathname;
    const item = items.find(item => item.path === pathname);
    setCurrent(item ? item.key : '');
  }, [location]);

  const onClickTravelName = (travelName) => {
    const travelSelect = Object.values(data).find(item => item.travelName.travelName === travelName);
    dispatch(selectedTravel({data:travelSelect.travelName.data.results}))
  };

  const travelPlanItems = Object.values(data).map(plan => {
    const travelName = typeof plan.travelName === 'object' ? plan.travelName.travelName : plan.travelName;
    return {
      label: travelName,
      key: travelName,
      path: `/SeyahatPlanimDetay/${encodeURIComponent(travelName)}`,
    };
  });
  
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
      children: travelPlanItems
    },
    {
      label: 'Hakkımda',
      key: 'About',
      icon: <ContactsOutlined />,
      path: '/Hakkimda'
    }
  ];

  const onClick = (e) => {
    const item = items.find(item => item.key === e.key);
    if (item && item.path) {
      if (item.key === 'TravelPlan') {
        setCurrent(item.key);
      } else {
        setCurrent(item.key.split(':')[0]); 
        navigate(item.path);
      }
    }
  };

  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" style={{ justifyContent: 'center', padding: '10px' }}>
      {items.map(item => (
        item.children ? (
          <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
            {item.children.map(child => (
              <Menu.Item 
                key={child.key} 
                icon={item.icon} 
                onClick={() => {
                  onClickTravelName(child.label); 
                  navigate(child.path);
                }}
              >
                {child.label}
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        ) : (
          <Menu.Item key={item.key} icon={item.icon}>{item.label}</Menu.Item>
        )
      ))}
    </Menu>
  );
};

export default Header;
