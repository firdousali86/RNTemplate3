describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should navigate to the login page', async () => {
    await expect(element(by.id('Login'))).toBeVisible(); // Assuming 'loginPage' is the test ID of the login page component
  });

  it('should allow successful login', async () => {
    await element(by.id('usernameInput')).typeText('your_username'); // Assuming 'usernameInput' is the test ID of the username input field
    await element(by.id('passwordInput')).typeText('your_password'); // Assuming 'passwordInput' is the test ID of the password input field
    await element(by.id('loginButton')).tap(); // Assuming 'loginButton' is the test ID of the login button

    await expect(element(by.id('Login'))).toBeVisible(); // Assuming 'dashboardPage' is the test ID of the dashboard page component
  });
});
