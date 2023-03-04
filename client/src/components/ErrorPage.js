import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="app">
            <h3>
                <span>404</span>
                <br />
                <span>
                    Page Not Found
                </span>
                <br />
                <spam> 
                    Head to the <Link to="/">home page</Link>.
                </spam>
            </h3>
        </div>
    );
};

export default ErrorPage;