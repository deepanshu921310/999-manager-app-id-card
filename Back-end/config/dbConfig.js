module.exports = {
  HOST: "svf02.c1ycg6coi3xc.ap-south-1.rds.amazonaws.com",
  USER: "Admin",
  PASSWORD: "his47gWsIpE9SMP5v4e2",
  DB: "EMS",
  dialect: "mssql",
  timezone: "Asia/Kolkata",
  

  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
