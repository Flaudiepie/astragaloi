import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Board from './components/Grid/Board';
import { store } from './state/store';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <Board/>
    </Provider>
);