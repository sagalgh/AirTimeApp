import { connect } from "react-redux";
import MessageBox from "../components/MessageBox";
import { DISCONNECTED } from "../reducers/actions";

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        users: state.users,
        ownUser: state.ownUser,
        roomId: state.roomId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        disconnect: () => dispatch({ type: DISCONNECTED }),
    };
};

const connection = connect(mapStateToProps, mapDispatchToProps);

const connectedComponent = connection(MessageBox);

export { connectedComponent as MessageBox };
