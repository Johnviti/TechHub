import React from 'react';
import Header from '../Templates/Header/Header';

// import Rodape from '../Components/Rodape/Rodape';


const Main = ({children}) => {
    return (
        <div>
            <Header/>
            {/* <Main>{children}</Main> */}
        </div>
    );
}

export default Main;