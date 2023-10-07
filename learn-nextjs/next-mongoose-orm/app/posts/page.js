
const fetchPosts =async ()=>{
     const res = await fetch("http://localhost:3000/api/posts",{
        cache:"no-cache"
     });
     const response =await res.json()
     return response

}

export default async function Posts() {
    const posts = await fetchPosts()
    console.log("posts",posts);
  return (
    <div>
        posts
        {posts.map((post)=>{
            return (
         <>
         <h1>{post.id}</h1>
         <h2>{post.title}</h2>
         <p>{post.description}</p>
         <hr />
         </>
            )
})}
    </div>
  )
}
