export async function fetchBlogs() {
    const response = await fetch ('https://dummyjson.com/posts')
    if(!response.ok){
        throw new Error('Failed to fetch blogs')
    }
    const data = await response.json()
    return data.posts
}