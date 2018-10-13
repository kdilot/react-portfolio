import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
// import moment from 'moment';

const Wrapper = styled.div`
  margin: 0.7em;
  font-size: 1.15em;

  div {
    margin: 0.5em 0;
  }
  h2, .slt-currencyType {
    font-weight: bold;
  }
`

const CurrencyType = ({ type, handleCurrencyType, selected }) => {
  return (
    <Wrapper>
      <Row style={{ textAlign: 'center' }}>
          {type.map((list, index) => <Col span={2} style={{ padding: '0.5em', marginRight: '1.5em' }} className={selected === list ? "currencyType slt-currencyType" : "currencyType"} key={index} onClick={() => { handleCurrencyType(list) }}>{list}</Col>)}
      </Row>
    </Wrapper>
  );
};

export default CurrencyType;