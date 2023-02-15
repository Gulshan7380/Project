import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { RouterProvider } from 'react-router-dom';
import routes from './router/routes';

const root = ReactDOM.createRoot (document.getElementById('root'));

root.render(
    <RouterProvider router={routes} />
); 