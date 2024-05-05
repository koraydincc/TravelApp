import React from 'react';
import { notification } from 'antd';
import { Table, Space, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTravel, selectedTravel } from '../Store/Actions/travelDataActions';
import { useNavigate } from 'react-router-dom';

const { Column, ColumnGroup } = Table;

const TravelPlansTable = () => {
  const data = useSelector(state => state.travelPlans);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!data || Object.keys(data).length === 0) {
    notification.info({
      message: 'Seyahat Planı Bulunamadı',
      description: 'Henüz bir seyahat planınız bulunmamaktadır. Yeni bir seyahat planı oluşturun.',
    });
    return (
      <div>
        <Table dataSource={[]} /> 
      </div>
    );
  }

  const handleViewDetail = (record) => {
    const { travelName, data } = record;
    dispatch(selectedTravel(data));
    navigate(`/SeyahatPlanimDetay/${travelName}`);
  };
  

  const handleDelete = (record) => {
    const { travelName } = record;
    dispatch(deleteTravel(travelName, data));
    notification.success({
      message: 'Seyahat Planı Silindi',
      description: `${travelName} adlı seyahat planı başarıyla silindi.`,
    });
  };

  const dataSource = Object.values(data).map(item => item.travelName);

  return (
    <Table dataSource={dataSource}>
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
