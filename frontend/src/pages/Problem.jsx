import { useParams } from "react-router-dom"
import SubmitCode from "../components/SubmitCode"

function Problem(){

  const { roomCode, problemId } = useParams()

  return(

    <div>

      <h1>Problem</h1>

      <p>Problem description here</p>

      <SubmitCode roomCode={roomCode} problemId={problemId}/>

    </div>

  )
}

export default Problem