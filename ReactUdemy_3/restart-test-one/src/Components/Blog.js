import { useState, useRef } from "react"

const defaultPostsList = [
    {title: "Lia best", text: 'tiya'},
    {title: "love Lia too much", text: 'yes its troo'},
]

const Blog = () => {
    const [posts, addPost] = useState(defaultPostsList)
    const title = useRef();
    const text = useRef();

    const newPost = () => {
        addPost(prevPosts => {
            return [...prevPosts, {
                title: title.current.value,
                text: text.current.value
            }]
        })
    }

    return (
        <div>
            <h1>Exercise 3</h1>
            <p>New post!</p>
            title:< input type='text' ref={title}/>
            text:< input type='text' ref={text}/>
            <button type='button' onClick={newPost}>SUBMIT</button>
            {posts && posts.map((post, index)=>(
                <div key={index}>
                    <h2>{post.title}</h2>
                    <h3>{post.text}</h3>
                </div>
            ))}
        </div>
    )

}

export default Blog;