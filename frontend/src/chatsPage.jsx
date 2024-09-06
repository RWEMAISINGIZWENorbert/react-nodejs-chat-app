 
 // import { PrettyChatWindow } from "react-chat-engine-pretty";
 // const ChatsPage = (props) => {
 //   return (
 //     <div style={{ height: "100vh", width: "100vw" }}>
 //       <PrettyChatWindow
 //         projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
 //         username={props.user.username} // adam
 //         secret={props.user.secret} // pass1234
 //         style={{ height: "100%" }}
 //       />
 //     </div>
 //   );
 // };

// export default ChatsPage;
import PropTypes from "prop-types"
import {PrettyChatWindow, } from "react-chat-engine-pretty";
const ChartsPage = (props) => {
  // const chatProps = useMultiChatLogic ('6876a829-1a2a-48dc-b6b0-ab40aefb0a6b',props.user.username, props.user.secret);

  return (
  <div style={{height: '100vh'}} >
         <PrettyChatWindow
            projectId="6876a829-1a2a-48dc-b6b0-ab40aefb0a6b"
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}/>
    </div>
  );
}

ChartsPage.propTypes = {
  user: PropTypes.string.isRequired
}

export default ChartsPage;