import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

describe('Card.vue', () => {
    it('Card does not exists on page yet', () => {
        const wrapper = shallowMount(Card)
        expect(wrapper.find('q-card').exists()).to.be.false
    })  
})