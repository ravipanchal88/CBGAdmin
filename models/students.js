module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('student', {
    firstname: {
      type:      DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please enter firstname'
        },
    },
    lastname: {
      type:      DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please enter lastname'
        },
      }
    },
    parentname: {
      type:      DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please enter parent name'
        }
      }
    }
    parentname: {
      type:      DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please enter parent name'
        }
      }
    }
    
  }
  //   {
  //   classMethods: {
  //     associate: function(models) {
  //       models.user.hasMany(models.imagepost);
  //     }
  //   }
  // }
  )

  return(User);
};