export const select = (client) => {
    //console.log('event: ' + e);
    //console.log(e);
    return {
        type: "CLIENT_SELECTED",
        payload: client
    }
};

export const filterClients = (e, clients) => {
    //console.log('event: ' + e);
    //console.log(e);
    let searchQuery = e.target.value.toLowerCase();
    let filteredClients = clients.filter(function(el) {
        for (var key in el) {
            for (var prop in el[key]) {
                if ((el[key][prop].toLowerCase()).indexOf(searchQuery) !== -1) return true;
            }
        }
    });
    //console.log('filteredList: ' + filteredClients);
    return {
        type: "CLIENTS_FILTER",
        payload: filteredClients
    }
};
