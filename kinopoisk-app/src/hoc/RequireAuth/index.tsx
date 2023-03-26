import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { AppState } from "../../reduxTools/store";

interface IProps {
    children: JSX.Element;
}

const userSelector = (state: AppState) => state.auth

export const RequireAuth = (props: IProps) => {
    const location = useLocation();
    const user = useSelector((state:AppState) => state.auth.user)

    if (!user) {
        return <Navigate to="/form" state={{ from: location }} />;
    }
    return props.children;
};
