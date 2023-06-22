'use strict';

const userModel = require('./users/users');
const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('./clothes/model');
const foodModel = require('./food/model');
const Collection = require('./data-collection.js');
const fooodModel = require('./foood/model');


const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory;';

const sequelize = new Sequelize(DATABASE_URL,{});

const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
const foood = fooodModel(sequelize, DataTypes);


module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  food: new Collection(food),
  clothes: new Collection(clothes),
  foood: new Collection(foood),

}
