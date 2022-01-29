import { userType } from '../../redux/reducers/user-reducer'
import s from './users.module.css'
import axios from 'axios'

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
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response: any) => {
                console.log(response)
                setUsers(response.data.items)
            })
    }
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <div>
                        <img
                            className={s.avatar}
                            src={
                                user.photos.small
                                    ? user.photos.small
                                    : 'https://bit.ly/3nx6uIs'
                            }
                            alt="user-avatar"
                        />
                        {user.followed ? (
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
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
