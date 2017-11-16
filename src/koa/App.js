var koa = require('koa');
var logger = require('koa-logger');
var route = require('koa-route');
var koas = require('./controller/koa');
var app = koa();

app.use(logger());

app.use(route.get('/', koas.list));
app.use(route.get('/koa/new', koas.add));
app.use(route.get('/koa/:id', koas.show));
app.use(route.get('/koa/delete/:id', koas.remove));
app.use(route.get('/koa/edit/:id', koas.edit));
app.use(route.post('/koa/create', koas.create));
app.use(route.post('/koa/update', koas.update));

app.listen(3000);