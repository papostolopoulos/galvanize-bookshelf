'use strict';

module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/bookshelf_dev',
  },

  test: {
    client: 'postgresql',
    connection: 'postgres://localhost/bookshelf_test',
  },

  production: {}
};
