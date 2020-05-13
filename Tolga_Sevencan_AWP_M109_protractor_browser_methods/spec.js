describe('Compare websites', function () {
    it('should add a todo', function () {
        browser.get('https://www.pluralsight.com/');
        browser.sleep(7000);
        browser.get('https://www.udemy.com/');
        browser.sleep(7000);
        browser.get('https://www.linkedin.com/');
        browser.sleep(7000);
        browser.get('https://www.coursera.org/');
        browser.sleep(7000);
    });
});