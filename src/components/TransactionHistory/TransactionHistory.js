import propTypes from "prop-types"
import s from "./TransactionHistory.module.css"

export default function TransactionHistory({transactions}){
    return(
<table className={s.tHistory}>
  <thead className={s.head}>
    <tr className={s.tr}>
      <th className={s.th}>Type</th>
      <th className={s.th}>Amount</th>
      <th className={s.th}>Currency</th>
    </tr>
  </thead>

  <tbody>
  {transactions.map(({id, type, amount, currency}) => (
    <tr key = {id} className={s.body}>
    <td className={s.td}>{type}</td>
    <td className={s.td}>{amount}</td>
    <td className={s.td}>{currency}</td>
  </tr>
  ) 
   )}
    
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  transactions: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    })
  )
    
}