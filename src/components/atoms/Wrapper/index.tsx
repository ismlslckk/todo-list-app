/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import  './wrapper.scss';

const Wrapper = (props: any) => {

    return (

        <React.Fragment>
            <div className="wrapper">
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default Wrapper;