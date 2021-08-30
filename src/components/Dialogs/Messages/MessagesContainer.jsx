import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../../redux/dialogReducer';
import Messages from './Messages';
import {connect} from 'react-redux';
import { WithAuthRedirectComponent } from '../../HOC/WithAuthRedirect';

let mapStateToProps = (state) => {
    return {
        state: state.DialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(sendMessageActionCreator(text))
        },
        updateMessage: (text) => {
            dispatch(updateMessageTextActionCreator(text));
        }
    }
}

let authRedirectComponent = WithAuthRedirectComponent(Messages);

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent);

export default MessagesContainer;