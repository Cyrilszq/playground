import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// class VueApp extends HTMLElement {
//   connectedCallback() {
//     new Vue({
//       render: h => h(App),
//     }).$mount(this)
//   }
// }

// 使用 class 继承或使用 Reflect 继承 HTMLElement
function VueApp() {
  return Reflect.construct(HTMLElement, [], VueApp)
}
Object.setPrototypeOf(VueApp.prototype, HTMLElement.prototype)
Object.setPrototypeOf(VueApp, HTMLElement)

VueApp.prototype.connectedCallback = function () {
  new Vue({
    render: h => h(App),
  }).$mount(this)
}

window.customElements.define('vue-app', VueApp)