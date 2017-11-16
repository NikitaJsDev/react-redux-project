const parse = require('co-body');
const render = require('./../render');

const users = [];

exports.list = function *() {
  this.body = yield render('index', { users: users});
};

exports.add = function *() {
  this.body = yield render('new');
};

exports.edit = function *(id) {
  const data = users[id];
  if (!data) this.throw(404, 'Error!');
  this.body = yield render('edit', { data: data });
};


exports.show = function *(id) {
  const data = users[id];
  if (!data) this.throw(404, 'Error!');
  this.body = yield render('show', { data: data });
};


exports.remove = function *(id) {
  const data = users[id];
  if (!data) this.throw(404, 'Error!');
  users.splice(id, 1);
  for (let i = 0; i < users.length; i++) {
    users[i].id = 1;
  }
  this.redirect('/');
};

exports.create = function *() {
  let data = yield parse(this);
  data.created_on = new Date();
  data.update_on = new Date();
  let id = users.push(data);
  data.id = id - 1;
  this.redirect('/');
};


exports.update = function *() {
  let data = yield parse(this);
  let index = data.id;
  users[index].name = data.name;
  users[index].description = data.description;
  users[index].update_on = new Date();
  this.redirect('/');
};
