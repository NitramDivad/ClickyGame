import React from "react";
import "./Main.css";

const Main = props => (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="main">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
);

export default Main;
