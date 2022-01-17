import { userType } from '../../redux/reducers/user-reducer'
import s from './users.module.css'

type UsersPropsType = {
    users: Array<userType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<userType>) => void
}

export const Users = ({
    users,
    follow,
    unfollow,
    setUsers,
}: UsersPropsType) => {
    if (users.length === 0) {
        setUsers([
            {
                id: 1,
                fullName: 'Dmitry',
                avatar: 'https://bit.ly/3Aa1lew',
                status: 'in love',
                following: false,
                location: {
                    city: 'Minsk',
                    country: 'Belarus',
                },
            },
            {
                id: 2,
                fullName: 'Dmitry',
                avatar: 'https://bit.ly/3Aa1lew',
                status: 'in love',
                following: true,
                location: {
                    city: 'Moscow',
                    country: 'Russia',
                },
            },
            {
                id: 3,
                fullName: 'Dmitry',
                avatar: 'https://bit.ly/3Aa1lew',
                status: 'in love',
                following: false,
                location: {
                    city: 'Warszawa',
                    country: 'Poland',
                },
            },
        ])
    }
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <div>
                        <img
                            className={s.avatar}
                            src={user.avatar}
                            alt="user-avatar"
                        />
                        {user.following ? (
                            <button onClick={() => unfollow(user.id)}>
                                Unfollow
                            </button>
                        ) : (
                            <button onClick={() => follow(user.id)}>
                                Follow
                            </button>
                        )}
                    </div>
                    <div>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                        <div>{user.location.city}</div>
                        <div>{user.location.country}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
