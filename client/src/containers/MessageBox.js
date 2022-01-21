import { connect } from "react-redux";
import MessageBox from "../components/MessageBox";
import { DISCONNECTED, PINNED_MSG } from "../reducers/actions";

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        users: state.users,
        ownUser: state.ownUser,
        roomId: state.roomId,
        pinnedMessages: state.pinnedMessages
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        disconnect: () => dispatch({ type: DISCONNECTED }),
        addPinnedMessages: function(newPinnedMessages){
            return dispatch({type: PINNED_MSG, payload: newPinnedMessages})
        }
    };
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(MessageBox);

// const connectedComponent = connection(MessageBox);

export { connectedComponent as MessageBox };
