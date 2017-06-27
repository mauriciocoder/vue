import test from 'ava'
import Vue from 'vue/dist/vue.js'
import Notification from '../src/Notification'

let component
let propValue = 'adaba'

test.beforeEach(t => {
  let N = Vue.extend(Notification)
  component = new N({
    propsData: {
      message: propValue
    }
  }).$mount()
})

test('that it renders a notification', t => {
  t.is(component.$el.textContent, propValue.toUpperCase())
})

test('that it duplicates the property', t => {
  t.is(component.duplicate, (propValue + propValue))
})
