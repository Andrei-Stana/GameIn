import { goto } from "$app/navigation";

export function logOut(){
    localStorage.setItem("user", undefined)
    localStorage.setItem("username", undefined)
    localStorage.setItem("email", undefined)
    localStorage.setItem("photoUrl", undefined)
    localStorage.setItem("uid", undefined)
    goto("/auth/signup")
}



