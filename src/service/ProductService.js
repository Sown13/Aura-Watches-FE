import http from "./httpCommon";

const resultPerPage = "&_per_page=20";

const getAllProduct = (category, page) => {
    const resultPerPage = "&_page=" + page + "&_per_page=20";
    switch (category) {
        case "all":
            return http.get("/products?" + resultPerPage);
        case "men":
            return http.get("/products?isMen=1" + resultPerPage);
        case "women":
            return http.get("/products?isWomen=1" + resultPerPage);
        case "premier":
            return http.get("/products?isPremier=1" + resultPerPage);
        case "sport":
            return http.get("/products?isSport=1" + resultPerPage);
        case "AURA-WATCH":
            return http.get("/products?brand=AURA WATCH" + resultPerPage);
        case "FOSSIL":
            return http.get("/products?brand=FOSSIL" + resultPerPage);
        case "TOMMY-HILFIGER":
            return http.get("/products?brand=TOMMY HILFIGER" + resultPerPage);
        case "BULOVA":
            return http.get("/products?brand=BULOVA" + resultPerPage);
        case "GUESS":
            return http.get("/products?brand=GUESS" + resultPerPage);
        case "ANNE-KLEIN":
            return http.get("/products?brand=ANNE KLEIN" + resultPerPage);
        case "G-SHOCK":
            return http.get("/products?brand=G-SHOCK" + resultPerPage);
        case "NINE-WEST":
            return http.get("/products?brand=NINE WEST" + resultPerPage);
        case "TIMEX":
            return http.get("/products?brand=TIMEX" + resultPerPage);
        default:
            return http.get("/products?" + resultPerPage);
    }
}

const getProductListByFilter = (isActive, isMen, isWomen, isPremier, isSport, brand, page) => {
    // console.log("/products?isActive=" + isActive + "&isMen=" + isMen + "&isWomen=" + isWomen
    //     + "&isPremier=" + isPremier + "&isSport=" + isSport + "&brand=" + brand.replaceAll(" ", "%20") + "&_page=" + page);
    if (brand) {
        brand = brand.replace(/ /g, "%20");
    }
    return http.get(`/products?isActive=${isActive}
    ${isMen === 1 ? `&isMen=${isMen}` : ''}
    ${isWomen === 1 ? `&isWomen=${isWomen}` : ''}
    ${isPremier === 1 ? `&isPremier=${isPremier}` : ''}
    ${isSport === 1 ? `&isSport=${isSport}` : ''}
    &brand=${brand}&_page=${page}&_per_page=8`);
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
    getProductListByFilter,
    getProductById,
    addProduct,
    updateProduct,
    removeProduct,
    getProductsByUser
}

export default ProductService;