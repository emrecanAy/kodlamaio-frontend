//actions, reducer'lara gönderdiğimiz aksiyonlardır.

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export function addToCart(product){ //redux bir aksiyon yaptığın zaman bana obje gönder diyor. ve bu objenin içinde bu akiyon ismi olsun(type), peki neyi göndereceğim(payload)
    return {
        type : ADD_TO_CART, 
        payload : product
    }
}

export function removeFromCart(product){
    return{
        type : REMOVE_FROM_CART,
        payload : product
    }
}