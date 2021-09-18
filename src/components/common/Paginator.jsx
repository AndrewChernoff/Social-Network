import s from './Paginator.module.css';
import Preloader from '../common/Preloader';

const Paginator = ({ totalUsersCount, pageSize, isFetching, onPageChanged, currentPage }) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {isFetching === true ? <Preloader /> : null}
            </div>
            <div>
                {pages.map(p => {
                    return <span onClick={(e) => { onPageChanged(p); }} className={currentPage === p && s.selectedPage} key={p.id}> {p}  </span>

                })}
            </div>

        </div>
    )
}

export default Paginator