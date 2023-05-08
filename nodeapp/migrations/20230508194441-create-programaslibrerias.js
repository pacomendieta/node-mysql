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
      program_id: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references: {
          model: 'Programas',
          key: 'id'
        }
      },
      libreria_id: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references: {
          model: 'Librerias',
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