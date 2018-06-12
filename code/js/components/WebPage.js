import React from 'react';
import ClientsList from '../containers/clients-list';
import Details from '../containers/details';
//import '../../css/file';

//Это такая упрощенная форма написания ф-ции... 0_О
const WebPage = () => (
    <div className="container clearfix">
        <div className="left-col">
            <ClientsList />
        </div>
        <div className="right-col">
            <Details />
        </div>
    </div>
);

export default WebPage;
