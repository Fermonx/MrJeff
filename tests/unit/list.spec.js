import { shallowMount } from '@vue/test-utils'
import List from '@/components/List.vue'

describe('List.vue', () => {
  it('did the request successfully', () => {
    const wrapper = shallowMount(List)
    const result = wrapper.find(orders)
    expect(result).toBe(!null)
  })
})
