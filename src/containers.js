"use strict";
/**
 * Created by peter.cervienka on 29-Nov-16.
 */
var react_redux_1 = require("react-redux");
var Actions = require("./actions");
var components_1 = require("./components");
var mapStateToProps = function (state) {
    return {
        timers: state
    };
};
var mapDispatchtoProps = function (dispatch) {
    return {
        onStartTimer: function (event, name) { return dispatch(Actions.startTimer(name)); }
    };
};
exports.MainContainer = react_redux_1.connect(mapStateToProps, mapDispatchtoProps)(components_1.default);
