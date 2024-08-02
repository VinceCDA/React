import { useContext} from 'react'
import UserContext from '../../context/UserContext'

function BasicComponent() {
    const { user } = useContext(UserContext)

    if (!user) {
        return <h1>Not Logged In</h1>
    }

    return (
        <>
            <h1>Profile : {user.username }</h1>
        </>
    )
}

export default BasicComponent