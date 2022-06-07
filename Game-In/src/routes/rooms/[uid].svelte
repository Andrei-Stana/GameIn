<script context="module">
    export async function load({params}){
        const uid = params.uid;

        return{
            props:{
                uid
            }
        }
    }
</script>

<script>
    export let uid;
    console.log(uid)
</script>

<h1>Your ROOM ID: {uid}</h1>