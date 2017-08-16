var React = require('react');

/*var WeatherMessage = (props) => {
        var {temp, location} = props;
        return (
            <div>
                <h3>It is {temp}C in {location}</h3>
            </div>
        )

};*/
var WeatherMessage = ({temp, location}) => <h3>It is {temp} degC in {location}</h3>;

module.exports = WeatherMessage;