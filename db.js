const {Sequelize} = require('sequelize');

const sequelize = new Sequelize("aleksty8_dj1","aleksty8_dj1","529440Aa",{
    host:"aleksty8.beget.tech",
    dialect: "mysql"
});

const testing = async ()=>{
    try{
        await sequelize.authenticate();
        console.log('its all right');
    }catch(err){
    console.log(err);
    }
};
testing();
