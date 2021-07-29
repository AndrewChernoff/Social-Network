import React from "react";
import s from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([

            {
                id: 1,
                userPhoto: 'http://www.body-builder.info/wp-content/uploads/2017/08/d2.jpg',
                followed: false,
                fullName: 'Andrew Chernoff',
                status: 'That\'s not "null" but "undefined", beutiful life, sunshine',
                location: { country: 'USA', city: 'Los Angeles' }
            },
            {
                id: 2,
                userPhoto: 'http://www.body-builder.info/wp-content/uploads/2017/08/d2.jpg',
                followed: false,
                fullName: 'Serega Rastorguev',
                status: 'That was it',
                location: { country: 'USA', city: 'Miami' }
            },
            {
                id: 3,
                userPhoto: 'http://www.body-builder.info/wp-content/uploads/2017/08/d2.jpg',
                followed: true,
                fullName: 'Dmitry Uspeshny',
                status: 'wine, fish, nature',
                location: { country: 'Spain', city: 'Ibiza' }
            },
            {
                id: 4,
                userPhoto: 'http://www.body-builder.info/wp-content/uploads/2017/08/d2.jpg',
                followed: true,
                fullName: 'Ali Abdulloev',
                status: 'Asalam Aleikum, pharmacists',
                location: { country: 'Germany', city: 'Berlin' }
            }
        ])
    }

    return (
        <div>
            {props.users.map(u => (
                <div className={s.findUsersPage} key={u.id}>

                    <div> <img src={u.userPhoto} /> </div>

                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                    </div>


                    <div>
                        {u.fullName}
                    </div>

                    <div>
                        {u.status}
                    </div>

                    <div>
                        {u.location.country}
                    </div>

                    <div>
                        {u.location.city}
                    </div>

                </div>
            )
            )
            }

        </div>
    )
}

export default Users