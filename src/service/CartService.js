import http from "./httpCommon";

const getCarts = (userId) => {
    return http.get(`/users/${userId}/carts`);
}

const addProductToCart = (cart) => {
    return http.post(`/carts`, cart);
}

const increaseQuantity = (cart) => {
    return http.patch("/carts/" + cart.id, cart)
}

const removeProductFromCart = (cardId) => {
    return http.delete(`/carts/${cardId}`);
}

const CartService = {
    getCarts,
    addProductToCart,
    removeProductFromCart,
    increaseQuantity
}

export default CartService;