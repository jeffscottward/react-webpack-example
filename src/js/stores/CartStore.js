/**
 * CartStore
 */

"use strict";


var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');
var Immutable = require('immutable');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var CartConstants = require('../constants/CartConstants');

var CHANGE_EVENT = 'change';

var _widgets = Immutable.OrderedMap();

/**
 * Add a Widget.
 * @param {object} widget
 */
function add(widget) {
  _widgets = _widgets.set(widget.get('id'), Immutable.Map(widget));
}

/**
 * Remove a Widget.
 * @param {string} id
 */
function remove(id) {
  _widgets = _widgets.delete(id);
}

/**
 * Toggle presence of Widget.
 * @param {object} widget
 */
function toggle(widget) {
  if (widget.get("selected")) {
    remove(widget.get("id"));
  } else {
    add(widget);
  }
}

/**
 * Remove all Widgets.
 */
function removeAll() {
  _widgets = Immutable.OrderedMap();
}

var CartStore = merge(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  /**
   * Get the entire collection of Widgets.
   * @return {array}
   */
  getAll: function() {
    return _widgets.values();
  },

  /**
   * Get the Cart
   * @return {object}
   */
  getCart: function() {
    return _widgets;
  }
});

// Register to handle all updates
AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case CartConstants.CART_ADD:
      add(action.widget);
      break;

    case CartConstants.CART_REMOVE:
      remove(action.id);
      break;

    case CartConstants.CART_TOGGLE:
      toggle(action.widget);
      break;

    case CartConstants.CART_REMOVE_ALL:
      removeAll();
      break;

    default:
      return true;
  }

  // This often goes in each case that should trigger a UI change. This store
  // needs to trigger a UI change after every view action, so we can make the
  // code less repetitive by putting it here.  We need the default case,
  // however, to make sure this only gets called after one of the cases above.
  CartStore.emitChange();

  return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = CartStore;
