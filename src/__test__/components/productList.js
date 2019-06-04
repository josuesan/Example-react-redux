import React from 'react';
import { shallow } from "enzyme";
import { ProductList } from "../../components/productList";
import { ConnectedProductList } from "../../components/productList";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

it("renders no products when store is empty", ()=>{
    const wrapper = shallow(<ProductList products={[]}/>);
    expect(wrapper.find("thumbnail").length).toBe(0);
});


it("renders no products when store is empty using a  fake store", ()=>{
    const store= mockStore({ products: [] });
    const wrapper = render(<ConnectedProductList store={store}/>);
    expect(wrapper.find("thumbnail").length).toBe(0);
});

it("renders products", ()=>{
    const store= mockStore({ 
        products: [{ id:1, name: "Hola Mundo", price:100, image:""}] });
    const wrapper = render(<ConnectedProductList store={store}/>);
    expect(wrapper.find("thumbnail").length).toBe(1);
});

it("add product to shopping cart", ()=>{
    const store= mockStore({ 
        products: [{ id:1, name: "Hola Mundo", price:100, image:""}] });
    const wrapper = mount(<ConnectedProductList store={store}/>);
    wrapper.find("thumbnail button").simulate("click");
    const actions = store.getActions;
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe("ADD_TO_CART");
    expect(actions[0].product).not.toBeNull();
});