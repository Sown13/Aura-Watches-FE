import http from "./httpCommon";

const getCarts = (userId) => {
    return http.get(`/users/${userId}/carts`);
}

const addProductToCart = (product) => {
    return http.post(`/carts`, product);
}

const removeProductFromCart = (cardId) => {
    return http.delete(`/carts/${cardId}`);
}

const CartService = {
    getCarts,
    addProductToCart,
    removeProductFromCart
}

export default CartService;