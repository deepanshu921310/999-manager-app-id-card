const { sequelizeEMS } = require('../models');
const { Sequelize } = require('sequelize');

exports.getLocations = async (req, res) => {
    sequelizeEMS.query(
        "sp_GLB_GET_location_DD",
        {
            replacements: {},
            type: Sequelize.QueryTypes.SELECT
        }
    ).then(async(result) => {
        res.status(200).json({
            success: true,
            data: result
        });
    })
    .catch((error) => {
        res.status(500).json({
            success: false,
            message: error.message
        });
    });
};

exports.getClientMaster = async (req, res) => {
    sequelizeEMS.query(
        "sp_GLB_GET_clientMaster_DD",
        {
            replacements: {},
            type: Sequelize.QueryTypes.SELECT
        }
    ).then(async(result) => {
        res.status(200).json({
            success: true,
            data: result
        });
    })
    .catch((error) => {
        res.status(500).json({
            success: false,
            message: error.message
        });
    });
};

exports.getDesignation = async (req, res) => {
    sequelizeEMS.query(
        "sp_GLB_GET_designation_DD",
        {
            replacements: {},
            type: Sequelize.QueryTypes.SELECT
        }
    ).then(async(result) => {
        res.status(200).json({
            success: true,
            data: result
        });
    })
    .catch((error) => {
        res.status(500).json({
            success: false,
            message: error.message
        });
    });
};
