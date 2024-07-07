'use client';

import MainLayout from '@/layouts/Main';
import { store } from '@/store';
import { Provider } from 'react-redux';

export default function Home() {
    return (
        <Provider store={store}>
            <MainLayout />
        </Provider>
    );
}
