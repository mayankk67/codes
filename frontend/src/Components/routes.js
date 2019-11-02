import React from 'react';
import {NavLink} from 'react-router-dom';


class Routesx extends React.Component{
    render(){
        return(
<div>
        <NavLink to="/"
                            activeStyle={{
                            fontWeight: "bold"
                            }}
                    >
                    Home
                </NavLink>
            <NavLink to="/pdfFromLink"
                     activeStyle={{
                     fontWeight: "bold"
                    }}
            >
            Link
        </NavLink>
        <NavLink to="/pdfFromText"
            activeStyle={{
            fontWeight: "bold"
            }}
            >
            TEXT
        </NavLink>
</div>
        )
    }
}

export default Routesx;