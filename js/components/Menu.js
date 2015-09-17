var React = require('react');


var Menu = React.createClass({
  
  render: function() {
    return(
      <div>
      <nav className="menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/chart">Chart</a></li>
        </ul>
      </nav>
      </div>
    );
  }
  
});

module.exports = Menu;