const db = require("../models");
const { QueryTypes } = require('sequelize');

exports.getInfo = async(req, res) => {

    const customer = await db.sequelize.query(`SELECT [TradeShopId]
    ,[Name]
    ,[FullAddress]
    ,[DateRemove]
    FROM [SMTTerms].[dbo].[t_TradeShops]`, { type: QueryTypes.SELECT });

    try {
        if(customer != 0) {
            res.status(200).send(customer);
        } else {
            res.status(404).json({ message: "Couldn't find customer." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};

exports.getCustomer = async(req, res) => {

    const customer = await db.sequelize.query(`SELECT [Name] FROM [SMTTerms].[dbo].[t_TradeShops]`, { type: QueryTypes.SELECT });

    try {
        if(customer != 0) {
            res.status(200).send(customer);
        } else {
            res.status(404).json({ message: "Couldn't find customer." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};
