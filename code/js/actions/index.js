export const select = (clients) => {
    return {
        type: "CLIENT_SELECTED",
        payload: clients
    }
};
