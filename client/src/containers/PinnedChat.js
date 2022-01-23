import { connect } from "react-redux";
import  PinnedChats  from "../pages/PinnedChats";
import { LOAD_PINNED_MSGS } from "../reducers/actions";
const mapStateToProps = (state) => {
    return {
        users:state.users,
        pinnedMessages:state.pinnedMessages
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPinnedMessages: (pinnedMsgs) =>
        dispatch({  type: LOAD_PINNED_MSGS, payload:pinnedMsgs})
    };
};
const connection = connect(mapStateToProps, mapDispatchToProps);


const connectedComponent = connection(PinnedChats);

// export default connectedComponent
export { connectedComponent as PinnedChats };