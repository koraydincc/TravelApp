import React from 'react';
import { Table, Space, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons'; // Gerekli ikonları içeri aktarın

const { Column, ColumnGroup } = Table;

const TravelPlansTable = ({ data }) => {

  const handleViewDetail = (record) => {
    // Detay görüntüleme işlemleri burada gerçekleştirilir
  };

  const handleDelete = (record) => {
    // Silme işlemleri burada gerçekleştirilir
  };

  return (
    <Table dataSource={data}>
      <ColumnGroup title="Seyahat Planlarım">
        <Column title="Seyahat Planı Adı" dataIndex="travelName" key="travelName" />
        <Column title="Ülke" dataIndex="country" key="country" />
        <Column title="Şehir" dataIndex="city" key="city" />
        <Column
          title="İşlemler"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Button type="link" icon={<EyeOutlined />} onClick={() => handleViewDetail(record)}>
                Detaylı Gör
              </Button>
              <Button type="link" icon={<DeleteOutlined />} style={{ color: 'red' }} onClick={() => handleDelete(record)}>
                Sil
              </Button>
            </Space>
          )}
        />
      </ColumnGroup>
    </Table>
  );
};

export default TravelPlansTable;
