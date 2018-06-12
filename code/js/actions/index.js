export const select = (client) => {
    //console.log('event: ' + e);
    //console.log(e);
    return {
        type: "CLIENT_SELECTED",
        payload: client
    }
};
