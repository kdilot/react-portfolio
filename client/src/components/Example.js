import React, { Component } from 'react';
import { Row, Col, Card, Icon, Tag } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Language } from 'common';
import { Store } from 'context';
const { Meta } = Card;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 5em;

  h1 {
    margin-top: 1em;
  }
  .ant-card-meta-title {
    height: 3em;
    white-space: normal;
  }
  .ant-card-meta-description {
    height: 5.5em;
  }
  .ant-tag-has-color {
    margin: 0.1em;
    font-size: 0.9em;
  }
  .ant-card-meta-description {
    display: table-cell;
    vertical-align: middle;
  }
`

class Example extends Component {
  render() {
    return (
      <Store.Consumer>
        {store => {
          return (
            <Wrapper className={store.theme}>
              <Row style={{ width: '80%' }} className="ex">
                <Col span={24}>
                  <Row style={{ textAlign: "center" }} gutter={20}>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                      <Card
                        cover={<h1><Language value="NetflixExTitle" /></h1>}
                        actions={[
                          <a rel="noopener noreferrer" href="https://github.com/kdilot/react-emptybox" target="_blank"><Icon type="github" theme="filled" style={{ fontSize: 30 }} /></a>,
                          <Link to="/netflix" style={{ textDecoration: 'none' }}><Icon type="play-circle" theme="filled" style={{ fontSize: 30 }} /></Link>
                        ]}
                      >
                        <Meta
                          title={<Language value="NetflixExInfo" />}
                          description={<div>
                            <Tag color=" ">react-context</Tag>
                            <Tag color=" ">react-slick</Tag>
                            <Tag color=" ">react-onclickoutside</Tag>
                            <Tag color=" ">ant-design</Tag>
                            <Tag color=" ">styled-components</Tag>
                          </div>}
                        />
                      </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                      <Card
                        cover={<h1><Language value="VtcExTitle" /></h1>}
                        actions={[
                          <a rel="noopener noreferrer" href="https://github.com/kdilot/react-emptybox" target="_blank"><Icon type="github" theme="filled" style={{ fontSize: 30 }} /></a>,
                          <Link to="/vtc" style={{ textDecoration: 'none' }}><Icon type="play-circle" theme="filled" style={{ fontSize: 30 }} /></Link>
                        ]}
                      >
                        <Meta
                          title={<Language value="VtcExInfo" />}
                          description={<div>
                            <Tag color=" ">redux</Tag>
                            <Tag color=" ">redux-saga</Tag>
                            <Tag color=" ">express</Tag>
                            <Tag color=" ">mongoDb</Tag>
                            <Tag color=" ">websocket</Tag>
                            <Tag color=" ">axios</Tag>
                            <Tag color=" ">recharts</Tag>
                            <Tag color=" ">ant-design</Tag>
                            <Tag color=" ">styled-components</Tag>
                          </div>}
                        />
                      </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                      <Card
                        cover={<h1><Language value="ProductExTitle" /></h1>}
                        actions={[
                          <a rel="noopener noreferrer" href="https://github.com/kdilot/react-emptybox" target="_blank"><Icon type="github" theme="filled" style={{ fontSize: 30 }} /></a>,
                          <Link to="/product" style={{ textDecoration: 'none' }}><Icon type="play-circle" theme="filled" style={{ fontSize: 30 }} /></Link>
                        ]}
                      >
                        <Meta
                          title={<Language value="ProductExInfo" />}
                          description={<div>
                            <Tag color=" ">redux</Tag>
                            <Tag color=" ">localStorage</Tag>
                            <Tag color=" ">ant-design</Tag>
                            <Tag color=" ">styled-components</Tag>
                            <Tag color=" ">styled-components</Tag>
                          </div>}
                        />
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Wrapper>
          )
        }}
      </Store.Consumer>
    )
  }
}

export default Example;