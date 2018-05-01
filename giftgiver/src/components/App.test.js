import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const app = shallow(<App />)

// "it", "expect" and "toMatchSnapshot" are all Jest methods
it('renders correctly', () => {
  expect(app).toMatchSnapshot()
})

// backticks indicate that state is a special object or variable
it('initialises the `state` with an empty list of gifts', () => {
  expect(app.state().gifts).toEqual([])
})

it('adds a new gift to `state` when clicking the `add gift` button', () => {
  // find inner child nodes or components, by JSX tag or classname
  app.find('.btn-add').simulate('click')

  expect(app.state().gifts).toEqual([{ id: 1 }])
})
