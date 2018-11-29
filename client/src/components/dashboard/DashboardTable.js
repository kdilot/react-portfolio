import React from 'react';
import { Language } from 'common';
import { Table } from 'antd';

const columnList = [
  {
    title: 'No',
    dataIndex: 'no',
    align: 'center',
    width: '8%',
    sorter: (a, b) => a.no > b.no ? 1 : -1,
  }, {
    title: 'OrderNo',
    dataIndex: 'orderNo',
    align: 'center',
    width: '8%',
    sorter: (a, b) => a.orderNo > b.orderNo ? 1 : -1,
  }, {
    title: <Language value={'Thumbnail'} />,
    dataIndex: 'thumbnail',
    align: 'center',
    width: '10%',
  }, {
    title: <Language value={'Buyer'} />,
    dataIndex: 'buyer',
    align: 'center',
    width: '10%',
    sorter: (a, b) => a.buyer > b.buyer ? 1 : -1,
  }, {
    title: <Language value={'Name'} />,
    dataIndex: 'name',
    align: 'center',
    width: '45%',
    sorter: (a, b) => a.name > b.name ? 1 : -1,
  }, {
    title: <Language value={'Address'} />,
    dataIndex: 'address',
    align: 'center',
    width: '40%',
    sorter: (a, b) => a.address > b.address ? 1 : -1,
  }, {
    title: <Language value={'Price'} />,
    dataIndex: 'price',
    align: 'center',
    width: '12%',
  }, {
    title: <Language value={'TotalPrice'} />,
    dataIndex: 'total',
    align: 'center',
    width: '12%',
  }, {
    title: <Language value={'Quantity'} />,
    dataIndex: 'quantity',
    align: 'center',
    width: '12%',
    sorter: (a, b) => a.quantity - b.quantity,
  }, {
    title: <Language value={'Display'} />,
    dataIndex: 'display',
    align: 'center',
    width: '13%',
  }, {
    title: <Language value={'Status'} />,
    dataIndex: 'status',
    align: 'center',
    width: '13%',
  }
]

const createColumn = (columns) => {
  const arr = []
  columns.map(list => arr.push(columnList.filter(name => name.dataIndex === list)[0]))
  return (arr)
}

const DashboardTable = ({ columns, data, pageSize }) => {
  const columnData = createColumn(columns)
  return (
    <Table columns={columnData} dataSource={data} pagination={{ pageSize: pageSize, size: 'large' }} scroll={{ x: 576, y: 650 }} size={'small'} />
  );
};

export default DashboardTable;