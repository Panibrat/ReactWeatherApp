var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p className="text-center"> Examples to try </p>
            <ol>
                <li>
                    <Link to="/?location=Kiev">Kiev</Link>
                </li>
                <li>
                    <Link to="/?location=London">London </Link>
                </li>
                <li>
                    <Link to="/?location=New York">New York </Link>
                </li>
            </ol>
        </div>);
}
module.exports = Examples;
