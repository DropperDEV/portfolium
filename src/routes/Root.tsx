import {Outlet} from "react-router";
import Sidebar from "../components/Sidebar.tsx";
import Main from "../components/Main.tsx";

export default function Root() {
    return (
        <>
            <Sidebar/>
            <Main>
                <Outlet />
            </Main>

        </>
    );
}