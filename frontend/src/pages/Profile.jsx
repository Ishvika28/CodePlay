import { useEffect, useState } from "react"

function Profile() {

  const [user, setUser] = useState(null)

  const getProfile = async () => {

    const token = localStorage.getItem("token")

    const response = await fetch("http://localhost:5000/api/auth/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const data = await response.json()

    setUser(data)

  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div>

      <h2>Profile</h2>

      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Rating: {user.rating}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  )

}

export default Profile