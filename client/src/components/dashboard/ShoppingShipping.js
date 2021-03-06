import React, { Component } from 'react';
import { Language, CurrencyFormat, RandomNumber } from 'common';
import { WithWidget, DashboardTable, SearchButton } from 'components/dashboard/common';
import randomcolor from 'randomcolor';
import { Col, Avatar, Tag } from 'antd';
import PropTypes from 'prop-types';

const PriceForm = ({ price }) => {
  return (
    <p><CurrencyFormat price={price} /></p>
  )
}

const status = [<Language text={'Shipp'} />, <Language text={'Delivered'} />, <Language text={'Canceled'} />]
const shippingList = []
for (let i = 1; i <= 50; i++) {
  const random = Math.floor(Math.random() * Math.floor(3))
  const shipping = {
    key: i,
    no: i,
    orderNo: `#${RandomNumber(5)}`,
    buyer: <Avatar icon="user" shape="square" size="large" style={{ backgroundColor: randomcolor() }} />,
    address: `${RandomNumber(5)} Test Street Apt ${100 + RandomNumber(20, true)}, CA`,
    total: <PriceForm price={RandomNumber(5000, true)} />,
    quantity: RandomNumber(999, true),
    status: <Tag style={{ color: 'white', opacity: random === 2 ? 0.5 : 1, background: random === 0 ? 'blue' : '' }}>{status[random]}</Tag>,
  }
  shippingList.push(shipping)
}

class ShoppingShipping extends Component {
  SearchList = (value, keyword) => {
    const { list } = this.state
    this.setState({
      search: value ? value : list,
      keyword
    })
  }
  state = {
    list: shippingList,
    search: false,
    keyword: null,
    columns: ['no', 'orderNo', 'buyer', 'address', 'total', 'quantity', 'status'],
    SearchList: this.SearchList
  }

  render() {
    const {
      list,
      search,
      keyword,
      columns,
      SearchList
    } = this.state
    let number = 1
    const SearchBtn = WithWidget(<SearchButton list={list} func={SearchList} keyword={keyword} />)({ title: 'AddressSearch', hide: false })
    const Shipping = WithWidget(<DashboardTable columns={columns} data={search ? search : list} pageSize={15} />)({ title: 'Shipping', hide: false })
    return (
      [
        <Col xs={24} sm={24} md={24} lg={24} xl={24} key={number++} >
          <SearchBtn />
          <Shipping />
        </Col>,
      ]
    );
  }
}

export default ShoppingShipping;

ShoppingShipping.propTypes = {
  list: PropTypes.array,
  search: PropTypes.bool,
  keyword: PropTypes.string,
  columns: PropTypes.array,
  number: PropTypes.number,
  SearchList: PropTypes.func,
}