import React from "react";
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            if (this.props.users.length === 0) {
                this.props.setUsers(response.data.items);
            }
        })
    }

    render() {
        return (
            <div>
                {this.props.users.map(u => (
                    <div className={s.findUsersPage} key={u.id}>

                        <div> <img src={u.photos.small != null ? u.photos.small : userPhoto} /> </div>

                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>follow</button>}
                        </div>


                        <div>
                            {u.name}
                        </div>

                        <div>
                            {u.status}
                        </div>

                        <div>
                            {'u.location.country'}
                        </div>

                        <div>
                            {'u.location.city'}
                        </div>

                    </div>
                )
                )
                }

            </div>
        )
    }
}
export default Users

/* const Users = (props) => {
    let getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            if (props.users.length === 0) {
                props.setUsers(response.data.items);
            }
        })
    }

    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {props.users.map(u => (
                <div className={s.findUsersPage} key={u.id}>

                    <div> <img src={u.photos.small != null ? u.photos.small : userPhoto} /> </div>

                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                    </div>


                    <div>
                        {u.name}
                    </div>

                    <div>
                        {u.status}
                    </div>

                    <div>
                        {'u.location.country'}
                    </div>

                    <div>
                        {'u.location.city'}
                    </div>

                </div>
            )
            )
            }

        </div>
    )
}

export default Users */