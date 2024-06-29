import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/FakeAuthContext"
import { useEffect } from "react"
import { PropTypes } from "prop-types"

function ProtectedRouted({children}) {
    const {isAuthenticated} = useAuth()
    const navigate = useNavigate()

    useEffect(function(){
        if(!isAuthenticated) navigate("/")
    },[isAuthenticated, navigate])
    return isAuthenticated ? children : null;
}

ProtectedRouted.propTypes = {
    children: PropTypes.object.isRequired,
}
export default ProtectedRouted
