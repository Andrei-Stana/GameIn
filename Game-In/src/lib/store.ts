import { goto } from "$app/navigation";

//export const email = writable(localStorage.getItem("email") || "EMAIL")
export const userName = localStorage.getItem("username") || "USERNAME"
export const photoUrl = localStorage.getItem("photoUrl") || "PHOTO"

export const user = localStorage.getItem("user") || undefined;

export function logOut(){
    localStorage.setItem("user", undefined)
    localStorage.setItem("username", undefined)
    goto("/auth/signup")
}


