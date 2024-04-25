import http from "./httpCommon";

const getTransactionByUser = (userId) => {
    return http.get(`/users/${userId}/transactions`);
}

const createTransaction = (transaction) => {
    return http.post(`/transactions`, transaction);
}

const TransactionService = {
    getTransactionByUser,
    createTransaction
}

export default TransactionService;