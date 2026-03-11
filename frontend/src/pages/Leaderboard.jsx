import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Leaderboard(){

  const { roomCode } = useParams()

  const [leaders,setLeaders] = useState([])

  useEffect(()=>{

    fetch(`http://localhost:5000/api/leaderboard/${roomCode}`)
    .then(res => res.json())
    .then(data => setLeaders(data))

  },[])

  return(

    <div>

      <h2>Leaderboard</h2>

      <table border="1">

        <thead>

          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Solved</th>
          </tr>

        </thead>

        <tbody>

          {leaders.map((user,index)=>(

            <tr key={index}>

              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.solved}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )

}

export default Leaderboard