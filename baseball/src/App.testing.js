import React from 'react'
import {render} from 

test('renders without crashing', () =>{
    render(<App/>)
})

//rendering component and destructure cheetsheet queries
//from https://testing-library.com/docs/dom-testing-library/cheatsheet"></a>React Assertions for testing</li>
//getbyText

test('is found', () =>{
    const {getByText} = render(<App/>)
})

getByText('Lions')
getByText(/Lions/i) //regex doesnt matter if caps or not on html or screen