async function getUserPosts(userId: string) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

    if (!res.ok) ''

    return res.json()
}

export default getUserPosts