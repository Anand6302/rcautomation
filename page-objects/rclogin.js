module.exports = {
    elements: {
        usernameField: ("input[placeholder='Username']"),
        passwordField: ("input[placeholder='Password']"),
        loginButton: (".login-button.btn.btn-secondary")
    },
    commands: [
        {
            login(username, password) {
                return this
                    .waitForElementVisible('@usernameField', 10000)
                    .setValue('@usernameField', username)
                    .waitForElementVisible('@passwordField', 10000)
                    .setValue('@passwordField', password)
                    .waitForElementVisible('@loginButton',)
                    .click('@loginButton');
            }
        }
    ],
};
