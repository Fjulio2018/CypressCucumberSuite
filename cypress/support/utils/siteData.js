const siteData = {
    automationPractice: {
        url: "http://automationpractice.com/index.php",
        loginPath: "?controller=authentication&back=my-account",
        emailSelector: "#email",
        passwordSelector: "#passwd",
        submitSelector: "#SubmitLogin",
    },
    automationExercise: {
        url: "https://www.automationexercise.com",
        loginPath: "/login",
        emailSelector: "[data-qa='login-email']",
        passwordSelector: "[data-qa='login-password']",
        submitSelector: "[data-qa='login-button']",
    },
};

export default siteData;
