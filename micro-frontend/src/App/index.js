import React, { Component, Fragment } from 'react'
import { Menu, Icon } from 'antd'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { withRouter } from 'react-router'
import './index.css'

class App extends Component {
  
  handleClick = ({ item, key }) => {
    this.props.history.push(`/${key}`)
    document.getElementById('module').innerHTML = `<${key}></${key}>`
    // 通信
    // window.dispatchEvent(new CustomEvent('react-app::addCount', { detail: 10 }))
    document.querySelector('react-app').setAttribute('name', 'abc')
  }

  componentDidMount() {
    // 做一些路由切换处理，防止刷新时页面不正确
  }

  render() {
    return (
      <div className="app">
        {/* 一种常见结构，左侧菜单，右侧为各个子应用 */}
        <Menu
          onClick={this.handleClick}
          style={{ width: 180, height: '100vh' }}
          defaultSelectedKeys={['1']}
          mode="inline"
        >
          <Menu.Item key="react-app">ReactApp</Menu.Item>
          <Menu.Item key="vue-app">VueApp</Menu.Item>
        </Menu>
        <div className="module" id="module"></div>
      </div>
    )
  }
}

export default withRouter(App)