import { goto } from "$app/navigation";
//import {io} from "socket.io-client";
//import Peer from "simple-peer";

export function logOut(){
    localStorage.setItem("user", undefined)
    localStorage.setItem("username", undefined)
    localStorage.setItem("email", undefined)
    localStorage.setItem("photoUrl", undefined)
    localStorage.setItem("uid", undefined)

    goto("/auth/signup")
}

//const socket = io("http://localhost:5000/");


