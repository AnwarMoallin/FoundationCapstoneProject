


module.exports = (sequelize, Sequelize) => {
    const Shoes = sequelize.define('Shoes', {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        yearModel: {
            type: Sequelize.STRING
        },
        size: {
            type: Sequelize.INTEGER
        },
        image: {
            type: Sequelize.STRING
        },
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true

        }
    });
    return Shoes;
};