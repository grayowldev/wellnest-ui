import Home from "@/app/views/Home";
import {redirect} from "next/navigation";

export default function App(){
    const isLoggedIn = true;

    if (!isLoggedIn) {
            redirect( '/signin')
    }
    return <Home />
}
