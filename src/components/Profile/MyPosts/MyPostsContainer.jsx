import { addPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        postElements: state.myPostPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {dispatch(addPostActionCreator(text))}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;