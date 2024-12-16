module.exports = {
    "Login Test": function (browser) {
        const rclogin = browser.page.rclogin();
 
        browser.url("https://webapp-use-cca-qa-02.azurewebsites.net/#/");
 
        rclogin
            .login("kalyan.avula@esolutionsfirst.com", "Pass@123");
 
        browser
            .pause(5000)
            .end();
    }
};
 