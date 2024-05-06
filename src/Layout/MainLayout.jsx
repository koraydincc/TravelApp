import React from 'react';
import { Layout } from 'antd';
import Header from '../Components/Header';
import AppFooter from '../Components/Footer';

const { Content } = Layout;

const layoutStyle = {
  height: '100vh', 
};



function MainLayout({ children }) {
  return (
    <Layout style={layoutStyle}>
      <Header/>
      <Content>
        {children}
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default MainLayout;
