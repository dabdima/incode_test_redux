import React from 'react';
import ClientsList from '../containers/clients-list';
import Details from '../containers/details';
//import '../../css/file';

//Это такая упрощенная форма написания ф-ции... 0_О
const WebPage = () => (
    <div>
        <h2>Clients:</h2>
        <ClientsList />
        <hr />
        <h3>Details:</h3>
        <Details />
    </div>
);

export default WebPage;
