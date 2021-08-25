import userPhoto from '../../assets/images/user.png';
import s from './Users.module.css';
import Preloader from '../common/Preloader';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { followUser, unfollowUser } from '../../API/api';

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {props.isFetching === true ? <Preloader /> : null}
            </div>
            <div>
                {pages.map(p => {
                    return <span onClick={(e) => { props.onPageChanged(p); }} className={props.currentPage === p && s.selectedPage}> {p} </span>

                })}
            </div>

            {props.users.map(u => (
                <div className={s.findUsersPage} key={u.id}>
                    <NavLink to={'profile/' + u.id}>
                        <div> <img src={u.photos.small != null ? u.photos.small : userPhoto} /> </div>
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                             unfollowUser(u.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })


                            }}>unfollow</button>
                            : <button onClick={() => {
                         followUser(u.id).then(response => {
                                    if(response.data.resultCode === 0){
                                        props.follow(u.id);
                                    }
                                })
                                

                            }}>follow</button>}
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

export default Users