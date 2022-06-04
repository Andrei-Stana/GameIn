import {writable} from "svelte/store";

export const userName = writable(localStorage.getItem("username") || "USERNAME");
export const email = writable(localStorage.getItem("email") || "EMAIL")
export const photoUrl = writable(localStorage.getItem("photoUrl") || "PHOTO")