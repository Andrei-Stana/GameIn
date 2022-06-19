import { goto } from "$app/navigation";
import {auth} from "./firebase";
export async function logOut(){
    let promi = await auth.signOut();
    console.log(auth)
    localStorage.setItem("user", undefined)
    localStorage.setItem("username", undefined)
    localStorage.setItem("email", undefined)
    localStorage.setItem("photoUrl", undefined)
    localStorage.setItem("uid", undefined)
    await goto("/auth/signin")
}



