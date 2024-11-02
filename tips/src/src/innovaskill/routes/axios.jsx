import axios from "axios";

const isLocalHost = Boolean(
    window.location.hostname === "localhost" || 
    window.location.hostname === "[::1]" || 
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
)

const API_URL = isLocalHost ?
"http://localhost:55555/innovaskill/api/"
:
"https://api.innovaskill.in/innovaskill/api/";

const AXX = axios.create({
    // withCredentials:true,
    baseURL:API_URL
})

// AXX.defaults.headers.common['Content-Type'] = "application/json";
AXX.defaults.headers.common["Content-Type"] = "application/json";

export default AXX;
