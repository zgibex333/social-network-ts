import React from 'react'
import s from './users.module.css'
import axios from 'axios'
import { UsersPropsType } from './UsersContainer'

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        if (this.props.usersPage.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response: any) => {
                    console.log(response)
                    this.props.setUsers(response.data.items)
                })
        }
    }

    render() {
        return (
            <div>
                {this.props.usersPage.users.map((user) => (
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
                                <button
                                    onClick={() => this.props.unfollow(user.id)}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    onClick={() => this.props.follow(user.id)}
                                >
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
}

export default Users
