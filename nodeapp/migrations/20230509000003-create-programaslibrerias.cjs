'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('programaslibrerias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      programaId: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references: {
          model: 'programas',
          key: 'id'
        }
      },
      libreriaId: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references: {
          model: 'librerias',
          key: 'id'
        }        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('programaslibrerias');
  }
};