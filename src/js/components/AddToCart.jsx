"use strict";

var React = require('react');

var CartActions = require('../actions/CartActions.js');

var CBToggle = require('../components/CBToggle.jsx');

var AddToCart = React.createClass({
  propTypes: {
    widget: React.PropTypes.object.isRequired
  },
  handleChange: function() {
    CartActions.toggle(this.props.widget);
  },
  render: function() {
    return (
      <CBToggle widget={this.props.widget} handleChange={this.handleChange}/>
    );
  }
});

module.exports = AddToCart;
