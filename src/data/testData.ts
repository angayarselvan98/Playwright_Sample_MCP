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

export const CheckoutTestData = {
  validCustomer: {
    firstName: 'John',
    lastName: 'Doe',
    postalCode: '12345',
  },
};

export const ExpectedMessages = {
  lockedOutError: 'Epic sadface: Sorry, this user has been locked out.',
  invalidCredentialsError: 'Epic sadface: Username and password do not match any user in this service',
  inventoryPageTitle: 'Products',
  cartPageTitle: 'Your Cart',
  checkoutStepOneTitle: 'Checkout: Your Information',
  checkoutStepTwoTitle: 'Checkout: Overview',
  checkoutCompleteTitle: 'Checkout: Complete!',
  checkoutCompleteHeader: 'Thank you for your order!',
  missingFirstNameError: 'Error: First Name is required',
  missingLastNameError: 'Error: Last Name is required',
  missingPostalCodeError: 'Error: Postal Code is required',
};
