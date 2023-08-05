const {createProxyMiddleware}=require('http-proxy-middleware')

module.exports=app=>{
    app.use(
        createProxyMiddleware('Newsapp-react',{
          target:"http://localhost:3000",
            changeOrigin:true
        })
    )
}