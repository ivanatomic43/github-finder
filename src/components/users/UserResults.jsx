import React, { useContext } from 'react'
import GithubContext from '../../context/GithubContext';
import Spinner from '../layouts/Spinner'
import UserItem from './UserItem'


function UserResults() {

  const { users, loading } = useContext(GithubContext);

  const renderedUsers = users.map((user) => {
      return <UserItem key={user.id} user={user} />
  });

  let content;

  content = loading ? <Spinner /> : renderedUsers

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-col-3 md:grid-cols-2 ">
      {content}
    </div>
  )
}

export default UserResults