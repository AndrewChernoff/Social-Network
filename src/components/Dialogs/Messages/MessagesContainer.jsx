import { sendMessageActionCreator } from '../../../redux/dialogReducer';
import Messages from './Messages';
import {connect} from 'react-redux';
import { WithAuthRedirectComponent } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        state: state.DialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(sendMessageActionCreator(text))
        }
    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirectComponent
) 
(Messages)