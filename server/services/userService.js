const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async (userData)=>{
    try{
        const user = await User.create(userData);
        return user
    }
    catch(error){
        throw new Error('Unable to create user')
    }
};

const loginUser = async (email, password) => {
    try {
      // Find the user by email
      const user = await findUserByEmail(email);
      if (!user) {
        throw new Error('Invalid email or password');
      }
  
      // Compare the provided password with the stored hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error('Invalid email or password');
      }
  
      // Generate a JWT token for the user
      const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret', {
        expiresIn: '1h', // Token expires in 1 hour
      });
  
      // Return the user and the token
      return { user, token };
    } catch (error) {
      throw new Error('Unable to log in user');
    }
  };

  const findUserByEmail = async(email) =>{
    try{
        const user = await User.findOne({where: {email}});
        return user;
    }
    catch(error){
        throw new Error('Could not find User')
    }
  }

module.exports = {createUser, findUserByEmail, loginUser};