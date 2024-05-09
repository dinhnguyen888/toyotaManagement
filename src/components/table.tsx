  import React, { useState, useEffect } from 'react';
  import { Button, Space, Table, Tag, Modal, Input, Form } from 'antd';
  import type { TableProps } from 'antd';
  import axios from 'axios';
  import { deleteUser,getallUsers,addUser,editUser } from '../service/api';
  interface DataType {
    id:string;
    key:string;
    name: string;
    age: number;
    address: string;
  }
  // const dataColumns = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park'
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park'
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sydney No. 1 Lake Park'
  //   },
  //   {
  //     key: '4',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sydney No. 1 Lake Park'
  //   },
  //   {
  //     key: '5',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sydney No. 1 Lake Park'
  //   },

  // ];

  const ListTable: React.FC = () => {
    
      // const [data, setData] = useState<DataType[]>(dataColumns);
    
    

    
  
    const [data, setData] = useState<DataType[]>([]);
    const [searchText, setSearchText] = useState('');
    const [searchData, setSearchData] = useState<DataType[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedRowKey, setSelectedRowKey] = useState<string | null>(null);
    const [hand,sethand] = useState(0)
    
    
    useEffect(() => {
      fetchData();
      
    }, []);
 
    const fetchData = async () => {
      try {
        const response = await getallUsers();
        const newData = response.data.map((item:any, index:any) => ({
          ...item,
          key: index.toString(), // Tạo key mới dựa trên index
        }));
        setData(newData);
        setSearchData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    

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
              key="edit"
              style={{ backgroundColor: 'pink', cursor: 'pointer' }}
              onClick={() => handleEdit(record.id)}
            >
              CHANGE
            </Tag>
            <Tag
              key="delete"
              style={{ backgroundColor: 'cyan', cursor: 'pointer' }}
              onClick={() => handleDelete(record.id)}
            >
              DELETE
            </Tag>
          </Space>
        ),
      },
    ];
    
    
    
    const handleDelete = async (id:string) => {
      // đừng xóa dòng dưới
      // eslint-disable-next-line no-restricted-globals
      const result = confirm('Bạn có chắc muốn xóa không?');
      if(result){
        await deleteUser(id);
      }
      
      
      
        fetchData(); // Sau khi xóa, tải lại dữ liệu mới
  
    };
    
    
    const handleEdit = (id: string) => {
      console.log('Edit:', id);
      sethand(0);
      const selectedRow = data.find(item => item.id === id);
      if (selectedRow) {
        setSelectedRowKey(id);
        setIsModalVisible(true);
      }
    };

    

  

    const initialValue = {
      name: "",
      age: "",
      address: "", // Thay vì "adress", bạn cần sử dụng "address"
    };
    
    
    const [user, setUser] = useState(initialValue); // Sử dụng initialValue thay vì data
    const { name, age, address } = user;
   
    console.log(hand)

    const onValueChange = (e:any) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    };

    const handleAddData = () => {
     sethand(1);
     setIsModalVisible(true);
     
    };
    
    interface User {
      name: string;
      age: string;
      address: string;
    }
    
    const addUserDetails = async () => {
      try {
        const newUser: User = { // Đảm bảo newUser có đúng kiểu dữ liệu User
          name: user.name || "",
          age: user.age || "",
          address: user.address || ""
        };
        await addUser(newUser);
        setIsModalVisible(false);
        fetchData();
      } catch (error) {
        console.error('Error adding user:', error);
      }
    };
    
    
    
    
  

    const handleCancel = () => {
      setIsModalVisible(false);
      sethand(0);
    };

    const onFinish = async (values: any) => {
      if (!selectedRowKey) return; // Đảm bảo selectedRowKey tồn tại
      const id = selectedRowKey; // Lấy id từ selectedRowKey
      try {
        await editUser(id, values); // Gọi hàm editUser với id và giá trị cần chỉnh sửa
        const updatedData = [...data]; // Tạo một bản sao mới của data
        const index = updatedData.findIndex(item => item.id === id); // Tìm index của dòng dữ liệu cần chỉnh sửa
        if (index !== -1) {
          updatedData[index] = { ...updatedData[index], ...values }; // Cập nhật dòng dữ liệu
          setData(updatedData); // Cập nhật state data với dữ liệu mới
          setSearchData(updatedData); // Cập nhật state searchData nếu cần
         
          setIsModalVisible(false); // Ẩn modal
        }
      } catch (error) {
        console.error('Error editing data:', error);
      }
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
       
        <Button onClick={handleAddData} >Add Data</Button>

        <Modal title="Edit Row" open={isModalVisible} onCancel={handleCancel} footer={null}>
          <Form
            name="editForm"
            initialValues={{ remember: true }}
            onFinish={hand === 0 ? onFinish : addUserDetails}
          >
            <Form.Item
              label="Name"
              name="name"
              
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input  onChange={(e) => onValueChange(e)} name="name" value={name} />
            </Form.Item>
            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: 'Please input your age!' }]}
            >
              <Input onChange={(e) => onValueChange(e)} name="age" value={age} />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: 'Please input your address!' }]}
            >
              <Input  onChange={(e) => onValueChange(e)} name="address" value={address} />
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
