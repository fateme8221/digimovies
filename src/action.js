'use server'

function getpost(id) {
    fetch(`http://localhost:3000/post/${id}`)
    .then(res=>res.json())
}