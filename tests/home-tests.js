process.env.NODE_ENV = 'test';
var app = require('../index.js');
var Browser = require('zombie');

describe('Homepage Tests', function() {
  before(function(){
    server = app.listen(3002);
    browser = new Browser({ site: 'http://localhost:3002' });
  })

  it('should render title', function(done){
    this.timeout(5000);
    browser.visit('/', function() {
      browser.assert.text('h1', 'A test page for ReactJS');
      done();
    })
  });

  after(function(done) {
    server.close(done);
  });
});