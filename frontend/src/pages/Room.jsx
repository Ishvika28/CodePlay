import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

function Room(){

  const { roomCode } = useParams()
  const [room, setRoom] = useState(null)

  useEffect(()=>{

    const fetchRoom = async () => {

      const token = localStorage.getItem("token")

      const res = await fetch(`http://localhost:5000/api/rooms/${roomCode}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })

      const data = await res.json()

      setRoom(data)
    }

    fetchRoom()

  },[roomCode])

  if(!room) return <p>Loading room...</p>

  return(

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-12">

      <h1 className="text-3xl font-bold mb-6">
        Room: {room.roomName}
      </h1>

      {/* Participants */}

      <div className="mb-10">

        <h2 className="text-xl font-semibold mb-4">
          Participants
        </h2>

        <ul className="text-gray-400">

          {room.participants.map((p)=>(
            <li key={p._id}>{p.name}</li>
          ))}

        </ul>

      </div>

      {/* Problems */}

      <div>

        <h2 className="text-xl font-semibold mb-4">
          Problems
        </h2>

        <ul>

          {room.problems.map((problem)=>(
            <li key={problem._id} className="mb-2">

              <Link
                to={`/room/${roomCode}/problem/${problem._id}`}
                className="text-blue-400 hover:text-blue-300"
              >
                {problem.title}
              </Link>

            </li>
          ))}

        </ul>

      </div>

    </div>
  )
}

export default Room