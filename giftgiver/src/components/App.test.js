import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const app = shallow(<App />)

// "it", "expect" and "toMatchSnapshot" are all Jest methods
it('renders correctly', () => {
  expect(app).toMatchSnapshot()
})

// backticks indicate that state is a special object or variable
it('initialises the `state` with an empty list')
