import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

export const RequiresAuth = ({children}) => {
    const {token} = useSelector(state=> state.auth)
    const location=useLocation();
    
  return (
    token ? (children) : <Navigate to="/login" state={{from: location }} replace  />
    
  )
}
