import { PropTypes } from "prop-types";
import {  createContext, useContext, useReducer } from "react";


const AuthContext = createContext()
const initalState = {
    user: null,
    isAuthenticated: false
}
function reducer(state, action) {
    switch (action.type) {
        case "login":
            return {
                ...state,
                user: action.payload,
                isAuthenticated:true
            }
        case "logout":
                return {
                    ...state,
                    user: null,
                    isAuthenticated:false
                }
        default:
            throw new Error("unknown action")
    }
}
const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
  };
  
function AuthProvider({children}) {
    const [{user, isAuthenticated}, dispatch] = useReducer(reducer, initalState)

    function login(email, password){
        if(email === FAKE_USER.email && password === FAKE_USER.password) {
            dispatch({type: "login", payload: FAKE_USER})
            // console.log("Correct")
        }
    }

    function logout(){
        dispatch({type: "logout"})
    }

    return <AuthContext.Provider value={{
        user,
        isAuthenticated,
        login,
        logout
    }}>
        {children}
    </AuthContext.Provider>
}

function useAuth(){
    const context = useContext(AuthContext)
    if (context === undefined) throw new Error("Context was used outside the AuthProvider")
    return context
}
AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
}

export {useAuth, AuthProvider}