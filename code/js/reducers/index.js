import {combineReducers} from 'redux';
import ClientsReducers from './clients';
import ActiveClient from './client-active';

const allReducers = combineReducers ({
    clients: ClientsReducers,
    active: ActiveClient
});


//если много преобразователей
// const allReducers = combineReducers ({
//     cars: CarsReducers,
//     cars2: sdfdsfsdf,
//     fdfs: sdfd
// });

export default allReducers
