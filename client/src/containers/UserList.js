import { connect } from "react-redux";
import Users from "../components/Users";
const mapStateToProps = (state) => {
    return {
        users: state.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};
const connection = connect(mapStateToProps, mapDispatchToProps);


const connectedComponent = connection(Users);

// export default connectedComponent
export { connectedComponent as UserList };
