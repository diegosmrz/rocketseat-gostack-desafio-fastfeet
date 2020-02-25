module.exports = {
  up: queryInterface => {
    return queryInterface.removeColumn('users', 'deliveryman');
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'deliveryman');
  },
};
