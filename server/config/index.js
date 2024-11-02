module.exports = {
    port :process.env.PORT,
    local_client_app:process.env.LOCAL_CLIENT_API,
    remote_client_app:process.env.REMOTE_CLIENT_API,
    allDomains:(process.env.NODE_ENV === "production" ? 
        [process.env.REMOTE_CLIENT_API ,
        process.env.REMOTE_SERVER_API] 
        :
        [process.env.LOCAL_CLIENT_API ,
        process.env.LOCAL_SERVER_API]
    )
}