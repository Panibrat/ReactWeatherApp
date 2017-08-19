var React = require('react');

/*var About = React.createClass({
  render: function () {
    return (
      <h3>About Component</h3>
    )
  }
});*/

//var About = () => <h3>About</h3>;

var About = () => {
    return (
    <div>
        <h1 className="text-center page-title">About</h1>
        <p>This is Weather App by React</p>
        <p>Usefull links:</p>
        <ul>
            <li>
                <a href="https://facebook.github.io/react/">React</a>
                - JavaScript framework
            </li>
            <li>
                <a href="http://foundation.zurb.com">Foundation</a>
                - CSS library
            </li>
            <li>
                <a href="http://openweathermap.org/">Open Weather Map</a>
                - Weather API
            </li>
        </ul>
    </div>
    )
};


module.exports = About;
