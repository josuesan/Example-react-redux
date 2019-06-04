import { products, cart } from "../reducers";

describe("products", ()=>{
    it("return the initial state ", ()=>{
        expect(products(undefined,{})).toEqual([]) 
    });

    it("recive products", ()=>{
        const productList= [
            {id:1, name: "Product 1", price: 100, image: ""}
        ];
        expect( products([], { type: "REPLACE_PRODUCTS", products:productList})).toEqual(productList)
    });
})