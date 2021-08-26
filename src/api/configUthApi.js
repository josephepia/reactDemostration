import axios from "axios";

const authApiKey = 'MjM1ZTI3ODItNTAyMS00NWQ2LWIxMDMtZjU5MTU2ZGJlYjY3';

const axiosAuth = axios({
    baseUrl: "https://api.m3o.com/v1/",
    headers: {'Authorization': `Bearer ${authApiKey}`}
})


export default axiosAuth;