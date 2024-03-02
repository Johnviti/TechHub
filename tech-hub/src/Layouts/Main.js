import React from 'react';
import {Header} from './Header';
import {Rodape} from './Rodape';


const Main = ({children}) => {
    return (
        <div>
            <Header/>
            <Main>{children}</Main>
            <Rodape />
        </div>
    );
}