import React from 'react';
//import render for testing
//yarn test (will run tests)
import { render} from '@testing-library/react'
import App from '../App';
import Display from '../Display';
import { strikeClick } from '../Display';

//to assert 
it('renders without crashing', () => {
  render(<App />);
});

//cheatsheet queries getByText https://testing-library.com/docs/dom-testing-library/cheatsheet
test(`Strike is found`, ()=>{
  const {getByText} = render(<Display />);

  //assert that 'Strikes' is on DOM
  getByText('Strikes')
})


test(`Ball is found`, ()=>{
  const {getByText} = render(<Display />);

  //using regex
  getByText(/balls/i)
})



// unit testing isolated JavaScript functions
test('strike adds 1 to the current score', () => {
  expect(strikeClick(1)).toBe(2);
 
  expect(strikeClick(1)).not.toBe(0);
});