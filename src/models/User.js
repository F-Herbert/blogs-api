const UserSchema = (sequelize,DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
    });

    User.associate = (models) => {
      User.hasMany(models.BlogPost, {
        foreignKey: 'userId', as: 'blogPosts'
      });
    }
  return User;
} 

module.exports = UserSchema;