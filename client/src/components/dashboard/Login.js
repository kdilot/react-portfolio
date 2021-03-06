import React, { Component } from 'react';
import { WithWidget } from 'components/dashboard/common';
import { Step0, Step1, Step2, Step3 } from 'components/dashboard';
import { Language } from 'common';
import { Form, Button, Row, Col, Steps } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Step = Steps.Step;
const Wrapper = styled.div`
  width: 100%;
  a { color: black; }
  .ant-input::placeholder { 
    color: white; 
    opacity: 0.8;
  }
  .ant-input-prefix {
    color: white;
  }
  .steps-content {
  padding: 0 1em;
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 40px;
}

.steps-action {
  margin-top: 24px;
}
`
const LoginForm = ({ handleType }) => {
  return (
    <Step0 handleType={handleType} />
  )
}

const RegisterForm = ({ current, handleCurrent, handleType }) => {
  const steps = [<Step1 />, <Step2 />, <Step3 />]
  return (
    <div>
      <Steps current={current}>
        {steps.map((item, index) => <Step key={index} />)}
      </Steps>
      <div className="steps-content">{steps[current]}</div>
      <div className="steps-action">
        {
          current < steps.length - 1
          && <Button type="primary" onClick={() => handleCurrent(true)}><Language text={'Next'} /></Button>
        }
        {
          current === steps.length - 1
          && <Button type="primary" ><Language text={'Done'} /></Button>
        }
        {
          current === 0
          && (
            <Button style={{ marginLeft: 8 }} onClick={() => handleType()}>
              <Language text={'Previous'} />
            </Button>
          )
        }
        {
          current > 0
          && (
            <Button style={{ marginLeft: 8 }} onClick={() => handleCurrent()}>
              <Language text={'Previous'} />
            </Button>
          )
        }
      </div>
    </div>
  )
}

class Login extends Component {
  handleType = () => {
    const { type } = this.state
    this.setState({ type: !type })
  }

  handleCurrent = (plus = false) => {
    const current = this.state.current + (plus ? 1 : -1)
    this.setState({ current })
  }

  state = {
    type: true,
    current: 0,
    handleSubmit: this.handleSubmit,
    handleType: this.handleType,
    handleCurrent: this.handleCurrent,
  }

  render() {
    const {
      handleType,
      type,
      current,
      handleCurrent,
    } = this.state
    const Login = WithWidget(<LoginForm handleType={handleType} />)({ col: 8 })
    const Regist = WithWidget(<RegisterForm handleType={handleType} current={current} handleCurrent={handleCurrent} />)(false)
    return (
      <Wrapper>
        <Row type="flex" justify="center" align="middle" style={{ width: '100%' }}>
          {type ? <Col xs={0} sm={0} md={24} lg={24} xl={24} style={{ marginTop: '10em' }} /> : ''}
          {type ?
            <Login />
            :
            <Regist />
          }
        </Row>
      </Wrapper>
    );
  }
}
export default Form.create()(Login);

Login.propTypes = {
  type: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleType: PropTypes.func,
  handleCurrent: PropTypes.func,
}