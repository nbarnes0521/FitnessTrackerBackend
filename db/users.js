const client = require("./client");
const bcrypt = require('bcrypt');


// database functions

// user functions
async function createUser({ username, password }) {
  const SALT_COUNT = 10;
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
  return { username, password: hashedPassword };
}


async function getUser({ username, password }) {

const user = await getUserByUserName(username);
const hashedPassword = user.password;

const isValid = await bcrypt.compare(password, hashedPassword)
}

async function getUserById(userId) {
  try {
    // Fetch the user from the database using the provided ID
    const user = await User.findById(id);

    // Exclude the password field from the user object
    const { password, ...userWithoutPassword } = user.toObject();

    // Return the user object without the password
    return userWithoutPassword;
  } catch (error) {
    // Handle any errors that may occur during the process
    console.error(`Error retrieving user with ID ${id}:`, error);
    throw error;
  }
}

async function getUserByUsername(userName) {

}

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUsername,
}
