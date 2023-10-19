import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';


const ChatsPage=(props)=> {
    const chatProps = useMultiChatLogic('c672f4ad-214e-4bc3-b30a-2c56d1f68fa2', props.user.username, props.user.secret);
    return ( 
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}} />

    </div>
    )
}

export default ChatsPage;