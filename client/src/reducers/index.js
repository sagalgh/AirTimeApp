import {
  CONNECT,
  DISCONNECTED,
  INITIALIZE,
  JOIN_ROOM,
  RECEIVED_MSG,
  USER_JOINED,
  IS_TYPING,
  STOPPED_TYPING,
  PINNED_MSG,
  LOAD_PINNED_MSGS
} from "./actions";
const INITIAL_STATE = {
  ownUser: {},
  socket: {},
  users: [],
  typingUsers: [],
  messages: [],
  roomId: "",
  pinnedMessages: []
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
      case JOIN_ROOM:
          return {
              ...state,
              ownUser: { username: action.payload.username },
              roomId: action.payload.room,
          };
      case DISCONNECTED:
          // if (state.socket)
          //     if (state.socket.current) state.socket.current.close();
          return INITIAL_STATE;
      case USER_JOINED:
          return {
              ...state,
              users: action.payload,
          };
      case CONNECT:
          return {
              ...state,
              ownUser: action.payload,
          };
      case INITIALIZE:
          return {
              ...state,
              socket: action.payload,
          };
      case IS_TYPING:
          return {
              ...state,
              typingUsers: [...state.typingUsers, action.payload],
          };
      case STOPPED_TYPING:
          return {
              ...state,
              typingUsers: state.typingUsers.filter(
                  (user) => user.id !== action.payload
              ),
          };
      case RECEIVED_MSG:
          return { ...state, messages: [...state.messages, action.payload] };
      case PINNED_MSG:
        console.log("I AM HERE", action.payload.url)
          return {
              ...state, pinnedMessages: [...state.pinnedMessages, action.payload]
          }
        case LOAD_PINNED_MSGS:
            return {
                ...state, pinnedMessages: action.payload 
            }
      default:
          return state;
  }
}

export { rootReducer };
