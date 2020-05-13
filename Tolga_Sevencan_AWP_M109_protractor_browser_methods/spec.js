describe('Compare websites by resolution', function () {


    it('i dk yet', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.pluralsight.com/');
        browser.getTitle().then(function (title) {
            console.log(title);
        });
        browser.sleep(7000);
    });

    it('i dk yet', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.udemy.com/');
        browser.manage().window().setSize(1920, 1080);
        browser.getTitle().then(function (title) {
            console.log(title);
        });
        browser.sleep(7000);
    });

    it('i dk yet', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.linkedin.com/');
        browser.manage().window().maximize();
        browser.getTitle().then(function (title) {
            console.log(title);
        });
        browser.sleep(7000);
    });

    it('i dk yet', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.coursera.org/');
        browser.manage().window().setSize(1400, 800);
        browser.getTitle().then(function (title) {
            console.log(title);
        });
        browser.sleep(7000);
    });
});