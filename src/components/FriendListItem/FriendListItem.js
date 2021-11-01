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
    id: propTypes.string,
    isOnline: propTypes.bool,
    avatar: propTypes.string,
    name: propTypes.string,  
}
