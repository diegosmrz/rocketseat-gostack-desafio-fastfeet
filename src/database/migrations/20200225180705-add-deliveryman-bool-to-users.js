module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'deliveryman', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'deliveryman');
  },
};
