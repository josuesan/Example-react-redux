import React from 'react';
import App from './App';
import { render } from "enzyme";
import  store  from "./store"
import { Provider } from "react-redux";
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-15';
enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {

  render(<Provider store={store}>
    <App />
    </Provider>);

});
