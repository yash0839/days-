import React from 'react'

const Card = () => {
  const Card =({user})
  return (
    <div>
      <img src={user.coverImage} alt="" />

      <img src={user.profileImage} alt="" />

      <h3>{users.fullName}</h3>
      <p>{users.title}</p>

      <div>
        <span>{usres.likeCount}</span>
        <span>{user.postCount}</span>
        <span>{users.viewCount}</span>
      </div>

      <button> {users.followed? "Following": "Follow"}</button>

    </div>
  )
}

export default Card
