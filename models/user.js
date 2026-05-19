// models/User.js
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // relasi jika ada
    }

    // Method untuk compare password (sudah benar)
    async comparePassword(candidatePassword) {
      const bcrypt = require('bcryptjs');
      return await bcrypt.compare(candidatePassword, this.password);
    }
  }

 User.init({
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'username'  // ⬅️ WAJIB: Mapping ke kolom DB
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    defaultValue: 'user'
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'Users',
  timestamps: true
});

  return User;
};