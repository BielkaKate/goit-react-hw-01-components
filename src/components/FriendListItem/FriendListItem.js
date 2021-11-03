import React from "react";
import propTypes from "prop-types"
import s from "./FriendListItem.module.css"

export default function FriendListItem({id, avatar, name, isOnline}) {
return (
<li className={s.item} key = {id}>
    <span className={
        isOnline ? s["online"] : s["offline"]
        }>
    </span>
    <img className={s.avatar} src={avatar} alt={name} width="48" />
    <p className={s.name}>{name}</p>
</li>
    )
}

FriendListItem.propTypes = {
    id: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,  
}
