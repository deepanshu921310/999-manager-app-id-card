const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

exports.sequelizeEMS = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        port: 1433,
        dialect: dbConfig.dialect,
        timezone: dbConfig.timezone,
        dialectOptions: {
            options: {
                "requestTimeout": 300000,
                enableArithAbort: true,
                encrypt: false
            }
            // useUTC: true
        },
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },
        logging: false
    }
)

sequelizeEmsTest = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        port: 1433,
        dialect: dbConfig.dialect,
        timezone: dbConfig.timezone,
        dialectOptions: {
            options: {
                "requestTimeout": 300000,
                enableArithAbort: true,
                encrypt: false
            }
            // useUTC: true
        },
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },
        logging: false
    }
)

sequelizeEmsTest.authenticate()
.then(() => {
    console.log('Logged into EMS Database')
})
.catch(err => {
    console.log('Error'+ err)
})

// module.exports = sequelizeEMS

// const db = {}

// db.Sequelize = Sequelize
// db.sequelize = sequelize

// db.products = require('./productModel.js')(sequelize, DataTypes)
// db.reviews = require('./reviewModel.js')(sequelize, DataTypes)





// // 1 to Many Relation

// db.products.hasMany(db.reviews, {
//     foreignKey: 'product_id',
//     as: 'review'
// })

// db.reviews.belongsTo(db.products, {
//     foreignKey: 'product_id',
//     as: 'product'
// })






