import React from 'react';
import Header from '../Components/Header/Header';
// import Rodape from '../Components/Rodape/Rodape';


const Main = ({children}) => {
    return (
        <div>
            <Header/>
            <Main>{children}</Main>
            {/* <Rodape /> */}
        </div>
    );
}

export default Main;