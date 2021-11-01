import React from 'react';
import propTypes from "prop-types"
import s from "./Statistics.module.css"


export default function Statistics ({title, stats}){
    return (
  <section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}

  <ul className={s.statList}>
    {stats.length > 0 && stats.map(stat => {
      return (
     <li className={s.item} key={stat.id}>
     <span className={s.label}>{stat.label}</span>
     <span className={s.percentage}>{stat.percentage}%</span>
   </li>
      )
     
   }
      )}
     
  </ul>
</section>
    )
}

Statistics.propTypes = {
  title: propTypes.string,
  label: propTypes.string,
  percentage: propTypes.number,
  id: propTypes.string,
}