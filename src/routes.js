import React from 'react';
import PageDemo1 from 'pages/pagedemo/page1.js';
import PageDemo2 from 'pages/pagedemo/page2.js';

const routes = [
    {
        path: '/page2',
        exact: false, 
        main: ({ location, history }) => <PageDemo2 location={location} history={history} />
    },
    {
        path: '/page1',
        exact: false, 
        main: ({ location, history }) => <PageDemo1 location={location} history={history} />
    },
   
];

export default routes;