var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

var Weather = React.createClass({
  getInitialState: function () {
    return {
        /*location: 'Kiev',
        temp: 23*/
        isLoading: false,
        errorMessage: undefined
    }
  },
  handleSearch: function (location) {
    var that = this;
    //debugger;
    this.setState({
        isLoading: true,
        errorMessage: undefined,
        location: undefined,
        temp: undefined
    });
    openWeatherMap.getTemp(location).then(function (temp) {
        that.setState({
            location: location,
            temp: temp,
            isLoading: false
        });
    }, function (err) {
        that.setState({
            isLoading: false,
            errorMessage: err.message
        });
    });
  },
    componentDidMount: function () {
    var location = this.props.location.query.location;
    if (location && location.length > 0) {
        console.log(this.props.location);
        this.handleSearch(location);
        window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function(newProps) {
        var location = newProps.location.query.location;
        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';        }

    },
  render: function () {
    var {temp, location, isLoading, errorMessage} = this.state;

    function renderMessage() {
        if (isLoading) {
            return <h3 className="text-center">Fetching weather...</h3>
        } else if (temp && location) {
           return <WeatherMessage location={location} temp={temp}/>
        }
    }
    function renderError() {
        if(typeof errorMessage === 'string') {
            return (
                <ErrorModal message = {errorMessage}/>
            )
        }
    }

    return (
        <div>
            <h1 className="text-center page-title">Get Weather </h1>
            <WeatherForm onSearch = {this.handleSearch}/>
            {renderMessage()}
            {renderError()}
        </div>
    )
  }
});

module.exports = Weather;
