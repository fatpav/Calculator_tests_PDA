import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })
  it('should be able to subtract numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })
  it('should multiply numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })
  it('should divide numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })
  it('concatenate multiple number button clicks', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick('7');
    wrapper.vm.numberClick('6');
    wrapper.vm.numberClick('5');
    expect(wrapper.vm.runningTotal).to.equal(765)
  })
  it('perform multiple functions', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.runningTotal = 0
    wrapper.vm.numberClick(5)
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick(5)
    wrapper.vm.operatorClick('*')
    wrapper.vm.numberClick(2)
    wrapper.vm.operatorClick('=')
    expect(wrapper.vm.runningTotal).to.equal(20)
  })
  it('should clear the running total without affecting the calculation', ()=> {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 10
    wrapper.vm.runningTotal = 22
    wrapper.vm.clearClick()
    expect(wrapper.vm.runningTotal).to.equal(0)
    expect(wrapper.vm.previousTotal).to.equal(10)
  })
})
