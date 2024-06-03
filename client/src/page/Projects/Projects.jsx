import React from 'react'
import Home from '@layout/Home/index.jsx'
import './Projects.scss'

import { Table, Avatar, Space, Button, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import SortingDropDown from '../../components/base/SortingDropDown/SortingDropDown';

import { listSortingByLetter, listSortingByStatus } from '../../contains/list-sorting.js'

const dataSource = [
  {
    key: '1',
    project: 'Hóa đơn cho Khách hàng PayPal',
    category: 'Phát triển',
    tasks: '32 / 110',
    budget: '$42.800',
    dueDate: '23 Tháng 7 2024',
    avatars: [/* URLs của các avatar */],
  },
  {
    key: '2',
    project: 'Mockup Trang web Dribble',
    category: 'Phát triển',
    tasks: '90 / 90',
    budget: '$12.500',
    dueDate: '10 Tháng 11 2024',
    avatars: [/* URLs của các avatar */],
  },
  // ... thêm dữ liệu ở đây
];
const columns = [
  {
    dataIndex: 'project',
    key: 'project',
    sorter: (a, b) => a.project.localeCompare(b.project),
    render: (text, record) => (
      <div>
        <Avatar shape="square" src={record.icon} />
        <span style={{ marginLeft: 8 }}>{text}</span>
      </div>
    ),
  },
  {
    dataIndex: 'category',
    key: 'category',
  },
  {
    dataIndex: 'tasks',
    key: 'tasks',
  },
  {
    dataIndex: 'budget',
    key: 'budget',
  },
  {
    dataIndex: 'dueDate',
    key: 'dueDate',
  },
  {
    dataIndex: 'avatars',
    key: 'avatars',
    render: avatars => (
      <Avatar.Group>
        {avatars.map((avatar, index) => (
          <Avatar key={index} src={avatar} />
        ))}
      </Avatar.Group>
    ),
  },
];

const handleChange = (value) => {
  console.log(`selected ${value}`);
}
const ProjectTable = () => {
  return (
    <div className="projectTable">
      <Space style={{ marginBottom: 16 }}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <SortingDropDown title="Sort" handleChange={handleChange} defaultValue="A-Z" options={listSortingByLetter}/>
        <SortingDropDown title="Status" handleChange={handleChange} defaultValue="All" options={listSortingByStatus}/>
        </div>
      </Space>
      <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 10 }} showHeader={false} />
    </div>
  );
};

const Projects = () => {
  return (
    <Home>
      <div className="projects">
        <h1><ProjectTable /></h1>
      </div>
    </Home>
  )
}

export default Projects
