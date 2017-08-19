var React = require('react');
var {Link, IndexLink} = require('react-router');



var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        alert('xxxl');
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weathe App</li>
                        <li>
                            <IndexLink to="/" activeclassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeclassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeclassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input type="search" placeholder="Search weather by city"/></li>
                            <li><button type="submit" className="button">Get Weather</button></li>
                        </ul>
                    </form>

                </div>
            </div>
        )
    }
});

module.exports = Nav;

