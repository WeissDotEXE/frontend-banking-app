import React from "react";

import Navigation from "components/Navigation/Navigation";
import axios from "axios";

function App() {
    const token = localStorage.getItem("jwtToken");

    axios.interceptors.request.use(
        async (config) => {
            if (token) {
                config.headers = {
                    Authorization: `Bearer ${token}`
                };
            }

            return config;
        },
        (error) => {
            console.error(error);
            Promise.reject(error);
        }
    );

    //handle errors for future response
    axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log(error.response.data.message.name);
        if(error.response.status===400 && error.response.data.message.name==="JsonWebTokenError"){
            localStorage.removeItem("jwtToken");
            localStorage.removeItem("userId");
        }
        return Promise.reject(error);
    });


    // isTokenValid()

    return (
        <div className="mt-20">
            <Navigation />
        </div>
    );
}

export default App;
