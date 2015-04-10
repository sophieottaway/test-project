module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    // add your routes here

    app.get('/examples/process1', function (req, res) {
      res.render('examples/process1/',  {
      "name": "Chris",
      "age": "James",
      "address": "50 Sleep Street",
      "owesTax": true
    });




      
    });

  }
};
