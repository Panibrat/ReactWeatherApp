var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return (
      <div>
        <Nav/>
          <div className="grid-x">
              <div className="medium-2 large-4 cell"></div>
              <div className="cell medium-6 large-4 small-centered" >
                  {props.children}
              </div>
              <div className="medium-2 large-4 cell"></div>
          </div>

      </div>
    );
};


module.exports = Main;
