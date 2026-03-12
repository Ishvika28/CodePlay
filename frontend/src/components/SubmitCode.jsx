import { useState } from "react"
import { useParams } from "react-router-dom"

function SubmitCode(){

  const [code,setCode] = useState("")
  const { roomCode, problemId } = useParams()

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

  if(res.ok){
    alert(`Result: ${data.result}`)
  } else {
    alert(data.message || "Submission failed")
  }

}

  return(

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-12">

      <h1 className="text-3xl font-bold mb-8">
        Submit Solution
      </h1>

      <div className="max-w-4xl bg-black/40 border border-white/10 rounded-2xl p-8 shadow-xl">

        <textarea
          rows="14"
          placeholder="Write your code here..."
          onChange={(e)=>setCode(e.target.value)}
          className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-sm font-mono text-gray-200 focus:outline-none focus:border-blue-500 resize-none"
        />

        <div className="flex justify-end mt-6">

          <button
            onClick={submit}
            className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            Submit Code
          </button>

        </div>

      </div>

    </div>

  )

}

export default SubmitCode