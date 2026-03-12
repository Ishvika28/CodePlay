import { useState } from "react"

function SubmitCode({ roomCode, problemId }){

  const [code,setCode] = useState("")

  const submit = async () => {

    const token = localStorage.getItem("token")

    const res = await fetch("http://localhost:5000/api/submissions",{

      method:"POST",

      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      },

      body:JSON.stringify({
        room: roomCode,
        problem: problemId,
        code: code,
        language: "javascript"
      })

    })

    const data = await res.json()

    alert(data.result)

  }

  return(

    <div>

      <h2>Submit Code</h2>

      <textarea
        rows="10"
        cols="50"
        placeholder="Write your code here..."
        onChange={(e)=>setCode(e.target.value)}
      />

      <br/>

      <button onClick={submit}>
        Submit Code
      </button>

    </div>

  )

}

export default SubmitCode