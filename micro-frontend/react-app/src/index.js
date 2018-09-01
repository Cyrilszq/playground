import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function ReactApp() {
  return Reflect.construct(HTMLElement, [], ReactApp)
}

Object.setPrototypeOf(ReactApp.prototype, HTMLElement.prototype);
Object.setPrototypeOf(ReactApp, HTMLElement);
ReactApp.prototype.connectedCallback = function () {
  ReactDOM.render(<App />, this)
}
ReactApp.prototype.disconnectedCallback = function () {
  // 使 react 调用 componentWillUnmount 清空订阅的事件
  ReactDOM.render(null, this)
}
ReactApp.prototype.attributeChangedCallback = function (attr, oldValue, newValue) {
  console.log(attr, oldValue, newValue)
}
window.customElements.define('react-app', ReactApp)
