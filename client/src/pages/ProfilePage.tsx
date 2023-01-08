import React from 'react'
import { useAuthStore } from '../store/auth'
import { useNavigate } from 'react-router-dom'

function ProfilePage() {

    const logout = useAuthStore(store => store.logout)
    const profile = useAuthStore(store => store.profile)
    const navigate = useNavigate()
    return (
        <div>
            <div>
                {JSON.stringify(profile)}
            </div>


            <button onClick={() => {
                logout()
                navigate('/login')
            }}>Logout</button>
        </div>
    )
}

export default ProfilePage