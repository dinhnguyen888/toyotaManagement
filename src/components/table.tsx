import React, { useState, useEffect } from 'react';
import { Button, Space, Table, Tag, Modal, Input, Form } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}
const dataColumns = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park'
  },
  {
    key: '5',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park'
  },

];

const ListTable: React.FC = () => {
  
    const [data, setData] = useState<DataType[]>(dataColumns);
   
   

  
 
  //const [data, setData] = useState<DataType[]>([]);
  const [searchText, setSearchText] = useState('');
  const [searchData, setSearchData] = useState<DataType[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRowKey, setSelectedRowKey] = useState<string | null>(null);

  
  
  useEffect(() => {
    const dataClone = localStorage.getItem('key');
    if (dataClone) {
      setData(JSON.parse(dataClone));
    }
  }, []);



  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Tag
            style={{ backgroundColor: 'pink', cursor: 'pointer' }}
            onClick={() => handleEdit(record.key)}
          >
            CHANGE
          </Tag>
          <Tag
            style={{ backgroundColor: 'cyan', cursor: 'pointer' }}
            onClick={() => handleDelete(record.key)}
          >
            DELETE
          </Tag>
        </Space>
      ),
    },
  ];
  
  const handleDelete = (key: string) => {
    console.log('Delete:', key);
    const updatedData = data.filter(item => item.key !== key);
    setData(updatedData);
    setSearchData(updatedData); // Cập nhật searchData nếu cần
    localStorage.setItem('key', JSON.stringify(updatedData));
  };

  const handleEdit = (key: string) => {
    console.log('Edit:', key);
    const selectedRow = data.find(item => item.key === key);
    if (selectedRow) {
      setSelectedRowKey(key);
      setIsModalVisible(true);
    }
  };

   

 

  const handleSetDataDefault = () => {
    alert('restore data thanh cong')
    window.location.reload()
    setData(dataColumns);
    localStorage.setItem('key', JSON.stringify(dataColumns));
  };
  
  

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: any) => {
    const updatedData = data.map(item => {
      if (item.key === selectedRowKey) {
        return { ...item, ...values };
      }
      return item;
    });
    setData(updatedData);
    setSearchData(updatedData); // Cập nhật searchData nếu cần
    localStorage.setItem('key', JSON.stringify(updatedData));
    setIsModalVisible(false);
  };

  return (
    <>
      <input className='my-3'
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.currentTarget.value);
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setSearchData(data.filter((x) => x.name.toUpperCase().includes(searchText.toUpperCase().trim())));
          }
        }}
      />
      <Table columns={columns} dataSource={searchData.length > 0 ? searchData : data} />
      
      <Button onClick={handleSetDataDefault}>Restore Data</Button>
      <Modal title="Edit Row" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <Form
          name="editForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: 'Please input your age!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please input your address!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ListTable;
