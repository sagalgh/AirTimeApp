import { connect } from "react-redux";
import  ChatPage from "../pages/ChatHomePage";
import { JOIN_ROOM } from "../reducers/actions";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        setRoom: (roomId) => dispatch({ type: JOIN_ROOM, payload: roomId }),
    };
};

const connection = connect(mapStateToProps, mapDispatchToProps);

const connectedComponent = connection(ChatPage);

export { connectedComponent as ChatPage };
