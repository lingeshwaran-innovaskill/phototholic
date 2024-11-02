

import axios from "axios";

const isLocalHost = Boolean(
    window.location.hostname === "localhost" || 
    window.location.hostname === "[::1]" || 
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
)

const API_URL = isLocalHost ?
"http://localhost:5555/leePhotoholic/api/"
:
"https://lee.photoholic.in/leePhotoholic/api/";

const TRANSFER = axios.create({
    baseURL:API_URL
})

// AXX.defaults.headers.common['Content-Type'] = "application/json";
TRANSFER.defaults.headers.common["Content-Type"]="application/json";

export default TRANSFER;
