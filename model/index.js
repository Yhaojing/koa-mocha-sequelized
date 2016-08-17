/**
 * Created by hnzb on 16/8/17.
 */
import Sequelize from 'sequelize';
const sequezlie = new Sequelize('database', 'name', 'pwd')

var koaTest = sequezlie.define('koa_test', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true},
    name: Sequelize.STRING,
    pwd: Sequelize.STRING
}, {
    timestamps:false,
    freezeTableName: true
});


export { koaTest };