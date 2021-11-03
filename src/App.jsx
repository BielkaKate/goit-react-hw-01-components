import Profile from "./components/Profile/Profile"
import user from "./data/user.json"



import Statistics from "./components/Statistics/Statistics"
import statData from "./data/statistical-data.json"


import FriendList from "./components/FriendList/FriendList"
import friends from "./data/friends.json"

import TransactionHistory from "./components/TransactionHistory/TransactionHistory"
import transactions from "./data/transactions.json"


export default function App(){
    return(
    <div className="container">
      
        <Profile 
        avatar = {user.avatar}
        name = {user.name} 
        tag = {user.tag} 
        location = {user.location} 
        stats = {user.stats}
        />
      
        

       
        <Statistics
        title = "UPLOAD STATS"
        stats = {statData}
        />
     

     
        <FriendList 
        friends = {friends}
        />
   

        <TransactionHistory transactions = {transactions}/>
     
    
    </div>
    ) 
}
