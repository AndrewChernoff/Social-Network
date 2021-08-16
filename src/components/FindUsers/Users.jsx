import userPhoto from '../../assets/images/user.png';
import s from './Users.module.css';

const Users = (props) => {
    debugger
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span onClick={(e) => {props.onPageChanged(p);}} className={props.currentPage === p && s.selectedPage}> {p} </span>

                    })}
                </div>

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

export default Users