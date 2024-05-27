const { sequelizeEMS } = require('../models');
const { Sequelize } = require('sequelize');

exports.postVerifyEmployee = async (req, res) => {
    try {
        const result = await sequelizeEMS.query(
            "sp_EMS_POST_verifyEmployee :username, :password",
            {
                replacements: {
                    username: req.body.username,
                    password: req.body.password
                },
                type: Sequelize.QueryTypes.SELECT
            }
        );
        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
