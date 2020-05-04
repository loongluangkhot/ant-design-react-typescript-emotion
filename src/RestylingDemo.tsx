import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Select, Space, Button } from 'antd';

import { css } from '@emotion/core';
import './RestylingDemo.css';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;

const ButtonStyled = (props: any) => {
  return (
    <Button
      css={css`
      background-color: hotpink;
      &:hover {
        background-color: red;
        color: white;
      }
      `}
      {...props}
    />
  )
}

const OptionWrapper = (props: any) => {
  return(
    <div
      css={css`
        background-color: hotpink;
        .ant-select-item-option {
          color: orange;
        }
        .ant-select-item-option-active {
          background-color: slategray;
        }
        .ant-select-item-option-selected {
          background-color: green;
        }
      `}
      {...props}
    />
  );
}

const SelectStyled = (props: any) => {
  return(
    <Select
      dropdownStyle={{ backgroundColor: "blue" }}
      dropdownRender={menu => 
        <OptionWrapper>
          {menu}
        </OptionWrapper>
      }
      {...props}
    />
  )
}


export class RestylingDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
            <div className="space">
              <Space>
                <Button>Button</Button>
                <ButtonStyled>Button Uglified</ButtonStyled>
              </Space>
            </div>
            <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
              <Select.Option value="lucy">Lucy</Select.Option>
              <Select.Option value="kim">Kim</Select.Option>
              <Select.Option value="victor">Victor</Select.Option>
            </Select>
            <SelectStyled defaultValue="lucy" style={{ width: 120 }} allowClear>
              <Select.Option value="lucy">Lucy</Select.Option>
              <Select.Option value="kim">Kim</Select.Option>
              <Select.Option value="victor">Victor</Select.Option>
            </SelectStyled>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}