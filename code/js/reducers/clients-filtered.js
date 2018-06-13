export default function(state = null, action) {
    switch (action.type) {
        case "CLIENTS_FILTER":
            return action.payload;
            break;
        default:
            return state;
    }
}
