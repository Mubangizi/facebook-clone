import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
function Feed() {
  return (
    <div className="feed">
      <StoryReel/>
      <MessageSender/>
      <Post 
        profilePic="https://api.time.com/wp-content/uploads/2014/01/bill-gates.jpg?w=600&quality=85"
        message="message"
        username="Bill"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTctPybTe1YEr9RXLTPVyiT3TLVh-sRfuYe5g&usqp=CAU"
      />
      <Post 
        profilePic="https://api.time.com/wp-content/uploads/2014/01/bill-gates.jpg?w=600&quality=85"
        message="message"
        username="Gates"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTctPybTe1YEr9RXLTPVyiT3TLVh-sRfuYe5g&usqp=CAU"
      />
      <Post 
        profilePic="https://api.time.com/wp-content/uploads/2014/01/bill-gates.jpg?w=600&quality=85"
        message="message"
        username="Allan"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTctPybTe1YEr9RXLTPVyiT3TLVh-sRfuYe5g&usqp=CAU"
      />
    </div>
  )
}

export default Feed
