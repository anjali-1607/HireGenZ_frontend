import axios from "axios";
import { BASE_URL } from "./Constant";

axios.defaults.baseURL = BASE_URL;

export const restoreAccessToken = () => {
    const token = localStorage.getItem("access_token");
    return token;
};

export function setAuthToken(token) {
    if (token) {
        secureAxios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${token}`;
    } else {
        delete secureAxios.defaults.headers.common["Authorization"];
    }
}

export const publicAxios = axios.create({
    baseURL: BASE_URL,
});

publicAxios.interceptors.response.use(
    function (res) {
        return res.data;
    },
    async function (err) {
        return Promise.reject(err);
    }
);

export const secureAxios = axios.create({
    baseURL: BASE_URL,

    headers: {},
});

if (localStorage.getItem("access_token")) {
    setAuthToken(localStorage.getItem("access_token"));
}

secureAxios.interceptors.response.use(
    function (res) {
        return res.data;
    },
    function (err) {
        // return Promise.reject(err);
        const originalRequest = err.config;
        if (
            (err?.response?.status === 403 || err?.response?.status === 401) &&
            !originalRequest._retry
        ) {
            ////('401 0r 403')

            //
            const token = restoreAccessToken();

            secureAxios.defaults.headers.common["Authorization"] =
                "Bearer " + token;

            //return secureAxios(originalRequest)
            return Promise.reject(err);
        }
        return Promise.reject(err);
    }
);
