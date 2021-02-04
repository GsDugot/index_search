import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Search from '@/pages/Search.vue'


describe ('Search.vue', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(Search)
    })
    it('Search Title exists on page', () => {
        expect(wrapper.find('#title').exists())
    })
    it('Artist input is empty', () => {
        expect(wrapper.find('#artistInput').text()).to.be.empty
    })
    it('Search Title has correct string', () => {
        expect(wrapper.find('#title').text()).to.equal('iTunes Search Index')
    })
    it('Select component has 7 options', () => {
        expect(wrapper.vm.options).to.have.lengthOf(7)
    })
    it('Search Button exists', () => {
        expect(wrapper.find('#searchButton').exists())
    })
})