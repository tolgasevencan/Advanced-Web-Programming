exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
    },
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js']
}