import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
    const [islogedin, setIslogedin] = useState(true);

    let Cmp = props.Cmp;

    useEffect(() => {
        if (!localStorage.getItem("access_token")) {
            setIslogedin(false);
            // history.push('/login')
        }
    }, []);

    if (!islogedin) {
        return <Navigate to="/recruiters/login"></Navigate>;
    } else {
        return (
            <div>
                <Cmp />
            </div>
        );
    }
}
