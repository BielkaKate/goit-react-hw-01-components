import React from 'react';
import propTypes from "prop-types"
import s from "./Profile.module.css"


export default function Profile (props) {
  const{avatar, name, tag, location, stats} = props;
  
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
      <span className={s.quantity}> {stats.followers}</span>
    </li>
    <li className = {s.statsItem}>
      <span className={s.label}>Views</span>
      <span className={s.quantity}> {stats.views}</span>
    </li>
    <li className = {s.statsItem}>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}> {stats.likes}</span>
    </li>
  </ul>
</div>
)
}


Profile.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired, 
  tag: propTypes.string.isRequired, 
  location: propTypes.string.isRequired,
  stats: propTypes.shape({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
  }),
}

