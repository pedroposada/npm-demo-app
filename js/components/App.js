var React = require('react');
var RouterMixin = require('react-mini-router').RouterMixin;
var GoogleChart = require('./BarChart');
var Menu = require('./Menu');

var App = React.createClass({

    mixins: [RouterMixin],

    routes: {
        '/': 'handle_home',
        '/chart': 'handle_chart'
    },
    
    history: true,

    handle_home: function() {
        return(
          <div>
            <div><Menu /></div>
            <div>Hello World</div>
          </div>
        );
    },

    handle_chart: function() {
        return(
          <div>
            <div><Menu /></div>
            <div><GoogleChart /></div>
          </div>
        );
    },

    notFound: function(path) {
        return(<div class="not-found">Page Not Found: {path}</div>);
    },

    render: function() {
        return this.renderCurrentRoute();
    }
});

module.exports = App;