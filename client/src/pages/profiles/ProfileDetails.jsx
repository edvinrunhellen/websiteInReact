import { Link, useLoaderData } from 'react-router-dom'

const ProfileDetails = () => {
    const profile = useLoaderData()
    console.log(profile)
    return (
        <div>
            <div className="profile-details">
                <h2>{profile.name}</h2>
                <p>Email:{profile.email}</p>
            </div>
            <div>
                <Link to="/profiles">Back</Link>
            </div>
        </div>
    )
}

export const ProfileDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if (!res.ok) {
        throw Error(`Det gick inte o hämta profilen med id: ${id}`)
    }
    return res.json()
}

export default ProfileDetails
