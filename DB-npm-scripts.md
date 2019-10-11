# This is a file i am creating to help me start project for nothing

### npm init

`npm init -y`
_This will create our package.json_

---

### gitignore

`npx gitignore node`
_This will create our .gitignore file_

### Install dependencies

`npm i express helmet morgan knex`
_These are the ones i have found useful so far_

### knexfile

`knex init`
_This creats our knexfile.js_

##### Here is some basic code for the knexfile.js

```
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/schemes.db3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
```

### nodemon -D

`npm i nodemon -D`
_This adds nodemon as a devDependencies_

### sqlite3 need to be installed

`npm install sqlite3 --save`

### Add Starting Files

`touch index.js server.js data/dbConfig.js`

##### here is some basic code for the dbConfig.js

```
const knex = require("knex");
const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);
//[process.env.NODE_ENV || 'development']
//This is what we would need if deploying to heroku

module.exports = db;

```

##### here is some basic code for the index.js

```

```

##### here is some basic code for the server.js

```

```

### Creating the .DB3

`npx knex migrate:make bootstrap`
_This will create the migrations folder in data (because thats where we told it to create it in the knexfile.js)_

```
exports.up = function(knex) {
  return knex.schema.createTable('tableName', tbl => {
    tbl.increments();

  })

};
```
