import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import { Provider } from 'react-redux';
import { store } from '../store/store'
import AppRouter from '../routers/AppRouter';

import '../style/styleGlobal.css'

const AppBlockMaster = () => {

    

    return (
        <Provider store={store}>
            <AppRouter onScroll={() => console.log("HOLA")}/>
        </Provider>
    )
}

export default AppBlockMaster
