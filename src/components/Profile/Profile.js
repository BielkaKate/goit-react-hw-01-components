import React from 'react';
import propTypes from "prop-types"
import s from "./Profile.module.css"


export default function UserProfile (props) {
  const{avatar, name, tag, location, stats: {followers, views, likes}} = props;
  
  return (
    <div className={s.profile}>
  <div className={s.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={s.avatar}
    />
    <p className={s.name}>{name}</p>
    <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}>
    <li className = {s.statsItem}>
      <span className={s.label}>Followers</span>
      <span className={s.quantity}> {followers}</span>
    </li>
    <li className = {s.statsItem}>
      <span className={s.label}>Views</span>
      <span className={s.quantity}> {views}</span>
    </li>
    <li className = {s.statsItem}>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}> {likes}</span>
    </li>
  </ul>
</div>
)
}


UserProfile.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string, 
  tag: propTypes.string, 
  location: propTypes.string,
  followers: propTypes.number,
  views: propTypes.number,
  likes: propTypes.number,
}
