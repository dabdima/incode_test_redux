import {combineReducers} from 'redux';
import ClientsReducers from './clients';
import ActiveClient from './client-active';
import ClientsFiltered from './clients-filtered';

const allReducers = combineReducers ({
    clients: ClientsReducers,
    filtered: ClientsFiltered,
    active: ActiveClient
});


//если много преобразователей
// const allReducers = combineReducers ({
//     cars: CarsReducers,
//     cars2: sdfdsfsdf,
//     fdfs: sdfd
// });

export default allReducers
