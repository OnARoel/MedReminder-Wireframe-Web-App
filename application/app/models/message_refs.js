module.exports = function(sequelize, Sequelize) {

    var Message_refs = sequelize.define('message_refs', {

        message_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        sender_id: {
            type: Sequelize.INTEGER,
            allowNULL: false
        },

        receiver_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },


    });

    return Message_refs;

}
