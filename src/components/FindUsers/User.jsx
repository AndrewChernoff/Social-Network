import userPhoto from '../../assets/images/user.png';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';

const User = ({ user, follow, unfollow, followingInProgress }) => {

    let u = user
    return (
        <div>
            <div className={s.findUsersPage} key={u.id}>
                <NavLink to={'profile/' + u.id}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='userPhoto' />
                    </div>
                </NavLink>
                <div className={s.btn}>
                    {u.followed
                        ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                            unfollow(u.id);
                        }}>unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                            follow(u.id);
                        }}>follow</button>}
                </div>

                <div className={s.information}>
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

            </div>
        </div>
    )
}

export default User