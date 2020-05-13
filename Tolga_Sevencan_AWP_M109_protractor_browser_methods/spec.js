/*
describe('Compare websites by resolution', function () {
    it('i dk yet', function () {
        browser.get('https://www.pluralsight.com/');
        browser.sleep(3000);
    });
});
*/
describe('Compare websites by resolution', function () {
    it('i dk yet', function () {
        browser.get('https://www.udemy.com/');
        browser.sleep(7000);
        browser.executeScript('window.moveTo(300, 400);' +
            'window.resizeTo(screen.width, screen.height);');
        /*
        browser.get('https://www.linkedin.com/');
        browser.sleep(7000);
        browser.get('https://www.coursera.org/');
        browser.sleep(7000);
        */
    });
});