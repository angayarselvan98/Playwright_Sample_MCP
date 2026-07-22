export const LoginTestData = {
  validUser: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  lockedOutUser: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
  invalidUser: {
    username: 'invalid_user',
    password: 'wrong_password',
  },
};

export const ExpectedMessages = {
  lockedOutError: 'Epic sadface: Sorry, this user has been locked out.',
  invalidCredentialsError: 'Epic sadface: Username and password do not match any user in this service',
  inventoryPageTitle: 'Products',
};
