import React, { Component } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout className = "layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">Menu #1</Menu.Item>
              <Menu.Item key="2">Menu #2</Menu.Item>
              <Menu.Item key="3">Menu #3</Menu.Item>
            </Menu>
          </Header>
        </Layout>
      </div>
    );
  }
}

export default App;