import User from './User';
import Paginator from '../common/Paginator';

const Users = ({ totalUsersCount, pageSize, isFetching, onPageChanged, currentPage, ...props }) => {

    return (
        <div>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} isFetching={isFetching}
                onPageChanged={onPageChanged} currentPage={currentPage} />

            {props.users.map(u => (<div key={u.id}>
                <User user={u} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow} key={u.id} />
            </div>
            )
            )

            }

        </div>
    )
}

export default Users