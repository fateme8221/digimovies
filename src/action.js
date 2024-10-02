'use server'
async function getposts(id) {
    let res = await fetch(`http://localhost:4000/posts/${id}`)
    return await res.json()
}
   export default getposts