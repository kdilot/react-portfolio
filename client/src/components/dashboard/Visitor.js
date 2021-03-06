import React, { Component } from 'react';
import { VisitorCharts } from 'components/dashboard';
import { WithWidget, DashboardTitle } from 'components/dashboard/common';
import { Row, Col, Avatar, Tag, Progress } from 'antd';
import { Language } from 'common';
import moment from 'moment';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  font-size: 1.1em;
  font-weight: bold;
`
const EmployeeWrapper = styled.div`
  margin: 0.5em 0;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 0.5em;
  padding: 0.5em;
  .ant-tag {
    background: white;
    padding: 1em;
    line-height: 0;
  }
`
const ProgressWrapper = styled.div`
  text-align: center;
  h5 { margin: 0.5em 0; }
`

const VisitorForm = ({ number }) => {
  return (
    <Wrapper>
      <h1>{number.toLocaleString('en')}</h1>
    </Wrapper>
  )
}

const EmployeeForm = ({ member, status }) => {
  return (
    member.map((list, index) => {
      return (
        <EmployeeWrapper key={index}>
          <Row type="flex" justify="center" align="middle">
            <Col span={5} style={{ textAlign: 'center' }}><Avatar size={45} icon="user" style={{ color: 'white', backgroundColor: status[index] === 'Working' ? 'green' : 'red' }} /></Col>
            <Col span={13}>
              <h5>{list[0]}</h5>
              <h6>{moment().hour(list[1]).minute(list[2]).format('HH:mm')} - {moment().hour(list[3]).minute(list[4]).format('HH:mm')}</h6>
            </Col>
            <Col span={6} style={{ textAlign: 'right' }}><Tag><Language text={status[index]} /></Tag></Col>
          </Row>
        </EmployeeWrapper>
      )
    })
  )
}

const ProgressForm = ({ member }) => {
  return (
    member.map((list, index) => {
      return (
        <ProgressWrapper key={index}>
          <Col xs={12} sm={12} md={12} lg={8} xl={8}>
            <h5>{list[0]}</h5>
            <h5><Progress type="circle" percent={list[5]} format={percent => percent === 100 ? <Language text='Done' /> : `${percent}%`} /></h5>
          </Col>
        </ProgressWrapper>
      )
    })
  )
}

class Visitor extends Component {
  render() {
    const {
      employeeList,
      status
    } = this.props
    let number = 1
    const Today = WithWidget(<VisitorForm number={290} />)({ title: 'Today', col: 6, hide: false })
    const Weekly = WithWidget(<VisitorForm number={1300} />)({ title: 'Weekly', col: 6, hide: false })
    const Monthly = WithWidget(<VisitorForm number={10490} />)({ title: 'Monthly', col: 6, hide: false })
    const Total = WithWidget(<VisitorForm number={103722} />)({ title: 'Total', col: 6, hide: false })
    const Employee = WithWidget(<EmployeeForm member={employeeList} status={status} />)({ title: 'EmployeeInfo', col: 12 })
    const WorkProgress = WithWidget(<ProgressForm member={employeeList} />)({ title: 'WorkProgress', col: 12 })
    const BrowserChart = WithWidget(<VisitorCharts option={'browser'} />)({ title: 'Browser', col: 8 })
    const VisitorChart = WithWidget(<VisitorCharts option={'bar'} />)({ title: 'ThisWeekVisitors', col: 8 })
    const VisitorComChart = WithWidget(<VisitorCharts option={'option'} />)({ title: 'VisitorPercentage', col: 8 })
    return (
      [
        <DashboardTitle title={'Visitor'} key={number++} />,
        <Today key={number++} />,
        <Weekly key={number++} />,
        <Monthly key={number++} />,
        <Total key={number++} />,
        <BrowserChart key={number++} />,
        <VisitorChart key={number++} />,
        <VisitorComChart key={number++} />,
        <DashboardTitle title={'Employee'} key={number++} />,
        <Employee key={number++} />,
        <WorkProgress key={number++} />,
      ]
    );
  }
}

export default Visitor;
