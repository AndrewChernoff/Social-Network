import React from "react";
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPages(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {   
        this.props.setUsers(response.data.items);
        })
    }

    render() {
        debugger
        
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span onClick={(e) => {this.onPageChanged(p);}} className={this.props.currentPage === p && s.selectedPage}> {p} </span>

                    })}
                </div>

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