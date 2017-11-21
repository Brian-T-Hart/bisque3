module.exports = function(sequelize, DataTypes) {
    var customers = sequelize.define("customers", {
      customer_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
            validate: {
              len: [1,10]
            }
      },
      contactName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        }
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        validate: {
          len: [1,2]
        }
      },
      notes: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dateVisited: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    },
{ timestamps: false });
    customers.associate = function(models) {
          customers.belongsTo(models.reps, {
            onDelete: "CASCADE"
          });
        };
    return customers;
  };