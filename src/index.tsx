import { CssBaseline } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import { store } from './state/store';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <CssBaseline/>
        <App/>
    </Provider>
);