module.exports = function(sequelize, Sequelize) {

    var Messages = sequelize.define('messages', {

        message_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        message: {
            type: Sequelize.STRING,
            allowNull: false
        },

        time: {
            type: Sequelize.TIME,
            allowNull: false
        },


    });

    return Messages;

}
