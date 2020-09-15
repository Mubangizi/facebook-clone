import React from "react";
import "./StoryReel.css";
import Story from './Story'


function StoryReel() {
  return (
    <div className="storyReel">
      <Story 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTctPybTe1YEr9RXLTPVyiT3TLVh-sRfuYe5g&usqp=CAU" 
        profileSrc="https://api.time.com/wp-content/uploads/2014/01/bill-gates.jpg?w=600&quality=85" 
        title="Bill Gates" />
      <Story 
        image="https://cdn.vox-cdn.com/thumbor/qaURkyxczndcpZJgkEKzs2frs_4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16307099/1146087607.jpg.jpg" 
        profileSrc="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F962142728%2F960x0.jpg%3Ffit%3Dscale" 
        title="Mark Zuckerberg" />
      <Story 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQz7uCdLR9lzl-44uvgvWZI-7G1MDMoWX9e3A&usqp=CAU" 
        profileSrc="https://www.biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg" 
        title="Jeff Bezos" />
      <Story 
        image="https://www.advancedsciencenews.com/wp-content/uploads/2019/10/kyle-sung-oQuP_XBjOMY-unsplash.jpg" 
        profileSrc="https://avatars1.githubusercontent.com/u/18049550?s=460&u=eed85add311ac1e74de2fae4bfed5f51f81b4d05&v=4" 
        title="Mubangizi Allan" />
      <Story 
        image="https://www.uopeople.edu/wp-content/uploads/2019/01/caspar-camille-rubin-220711-unsplash.jpg" 
        profileSrc="https://pbs.twimg.com/profile_images/1231164764400824321/15uY-haz_400x400.jpg" 
        title="Mart Trainer" />
    </div>
  );
}

export default StoryReel;
