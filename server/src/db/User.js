const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const passwordValidator = (value) => {
    // Password should contain at least one uppercase letter, one lowercase letter, and one symbol
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{3,}$/;
    return regex.test(value);
};


const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: [true, 'Username field is mandatory!'],
        unique: [true, 'Username already exists!'],
        minLength: [3, 'Username must be at least 3 characters long!']
    },
    email: {
        type: String, 
        required: [true, 'Email field is mandatory!'],
        unique: [true, 'Email already exists!'],
        minLength: [3, 'Email must be at least 3 characters long!']
    },
    password: {
        type: String, 
        required: [true, 'Password field is mandatory!'],
        validate: {
            validator: passwordValidator,
            message: 'Password must contain at least one uppercase letter, one lowercase letter, and one symbol!',
        },
        minLength: [3, 'Password must be at least 3 characters long!']
    }
})

userSchema.pre('save', async function (next) {
    try {
      if (!this.isModified('password')) {
        return next(); // If the password is not modified, move to the next middleware
      }
      this.password = await bcrypt.hash(this.password, 10);
      next(); // Proceed to save the document
    } catch (error) {
      return next(error); // Pass the error to the next middleware
    }
  });


const userModel = new mongoose.model('User', userSchema);



module.exports = userModel;