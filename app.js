//所有的中间件都要写在express web服务器
const express = require('express');
const adminsitratorRouter = require('./routes/administrator');
var app = express();
app.listen(8080);
app.use(express.static('public'));
//使用路由器，挂载到/adminsitrator 下
app.use(bodyParser.urlencoded)({
    extended:false
});
app.use('/user',adminsitratorRouter);
