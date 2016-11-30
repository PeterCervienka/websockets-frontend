/**
 * Created by peter.cervienka on 29-Nov-16.
 */
import {connect} from "react-redux";
import * as Actions from "./actions";
import MainComponent from "./components";

const mapStateToProps = (state) => {
    return {
        timers: state
    };
};

const mapDispatchtoProps = (dispatch) => {
    return {
        onStartTimer: (event, name) => dispatch(Actions.startTimer(name))
    }
};

export const MainContainer = connect(
    mapStateToProps,
    mapDispatchtoProps
)(MainComponent);



