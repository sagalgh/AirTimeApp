import { connect } from "react-redux";
import  PinnedChats  from "../pages/PinnedChats";
const mapStateToProps = (state) => {
    return {
        pinnedMessages:state.pinnedMessages
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};
const connection = connect(mapStateToProps, mapDispatchToProps);


const connectedComponent = connection(PinnedChats);

// export default connectedComponent
export { connectedComponent as PinnedChats };