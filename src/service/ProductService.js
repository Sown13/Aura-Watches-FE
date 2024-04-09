import http from "./httpCommon";

const getAllProduct = () => {
    return http.get("/products");
}

const getProductById = (id) => {
    return http.get("/products/" + id);
}

const addProduct = (product) => {
    return http.post("/products", product);
}

const updateProduct = (product) => {
    return http.patch("/products/" + product.id, product);
}

const removeProduct = (id) => {
    return http.delete("/products/" + id);
}

const getProductsByUser = (user) => {
    return http.get("/users/" + user + "/products");
}

const ProductService = {
    getAllProduct,
    getProductById,
    addProduct,
    updateProduct,
    removeProduct,
    getProductsByUser
}

export default ProductService;