const UserSchema = (sequelize,DataTypes) => {
    const User = sequelize.define('User', {
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
    }
  );
  return User;
} 

module.exports = UserSchema;