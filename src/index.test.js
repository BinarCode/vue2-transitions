import {mount} from 'vue-test-utils'
import Vue2Transitions from './'

test('it works', () => {
  const wrapper = mount(Vue2Transitions)
  expect(wrapper.isVueInstance()).toBe(true)
})
