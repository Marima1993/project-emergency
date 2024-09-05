import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-slate-700 text-white font-bold h-20 flex flex-row p-6 ">
                <a className="navbar-brand" href="#">LeipzigTreffen</a>
                <div className="ml-auto flex flex-row gap-6 ">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                    <FontAwesomeIcon icon="fa-brands fa-facebook" />

                </div>
            </nav >
        </>
    );
};

export default Navbar;
