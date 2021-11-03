import React from "react";
import propTypes, { shape } from "prop-types"
import FriendListItem from "../FriendListItem/FriendListItem"
import s from "./FriendList.module.css"


export default function FriendList({friends}){
return (
    <ul className={s.list}>
    {friends.map(({id, avatar, name, isOnline}) => (
        <FriendListItem key = {id} avatar = {avatar} name = {name} isOnline = {isOnline}/>
    )
    )}
    </ul>
)
}
FriendList.propTypes = {
    friends: propTypes.arrayOf(shape).isRequired,
}