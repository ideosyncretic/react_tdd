import React from 'react'
import { shallow } from 'enzyme'
import Gift from './Gift'

describe('Gift', () => {
  const gift = shallow(<Gift />)

  it('renders correctly', () => {
    expect(gift).toMatchSnapshot()
  })

  it('initialises a person and present in `state`', () => {
    expect(gift.state()).toEqual({ person: '', gift: '' })
  })

  describe('when typing into the person input', () => {
    const person = 'Uncle'
    beforeEach(() => {
      // change simulation needs an event object param
      gift
        .find('.input-person')
        .simulate('change', { target: { value: person } })
    })

    it('updates the person in `state`', () => {
      expect(gift.state().person).toEqual(person)
    })
  })
})