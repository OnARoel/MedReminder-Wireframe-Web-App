module.exports = function(sequelize, Sequelize) {

    var Friend_relation = sequelize.define('friend_relation', {

        relation_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        friend_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },


    });

    return Friend_relation;

}
