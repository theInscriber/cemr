import React from 'react'
import ReactDOM from 'react-dom'
import {act} from 'react-dom/test-utils'
import Search from './index'

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('can render search', () => {
    // Test first render and componentDidMount
    act(() => {
        ReactDOM.render(<Search />, container);
        ReactDOM.unmountComponentAtNode(container)
    }); 
})