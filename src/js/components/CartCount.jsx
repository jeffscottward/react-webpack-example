"use strict";

var React = require('react');

var CartStore = require("../stores/CartStore.js");

function cartItems(){
  return {
    widgets: CartStore.getCart()
  };
}

var CartCount = React.createClass({
  getInitialState: function() {
    return cartItems();
  },
  /**
   * Event handler for 'change' events coming from the WidgetStore
   */
  _onChange: function() {
    this.setState(cartItems());
  },
  componentDidMount: function() {
    CartStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    CartStore.removeChangeListener(this._onChange);
  },
  render: function() {
    return <span className="ns-CartCount">[{this.state.widgets.count()}]</span>;
  }
});

module.exports = CartCount;
