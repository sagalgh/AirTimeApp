import { connect } from "react-redux";
import  MessageTextArea  from "../components/MessageTextArea";

const mapStateToProps = (state) => {
    return {
        socket: state.socket,
        ownUser: state.ownUser,
        roomId: state.roomId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const connection = connect(mapStateToProps, mapDispatchToProps);

const connectedComponent = connection(MessageTextArea);

export { connectedComponent as MessageTextArea };
