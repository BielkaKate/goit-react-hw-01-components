import UserProfile from "./components/Profile/Profile"
import user from "./user.json"



import Statistics from "./components/Statistics/Statistics"
import statData from "./statistical-data.json"


import FriendList from "./components/FriendList/FriendList"
import friends from "./friends.json"

import TransactionHistory from "./components/TransactionHistory/TransactionHistory"
import transactions from "./transactions.json"


export default function App(){
    return(
    <div className="container">
      
        <UserProfile 
        avatar = {user.avatar}
        name = {user.name} 
        tag = {user.tag} 
        location = {user.location} 
        stats = {user.stats}
        followers = {user.stats.folowers}
        views = {user.stats.views}
        likes = {user.stats.likes}
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
