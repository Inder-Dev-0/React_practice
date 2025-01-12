import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
})

const postListReducer = (currPostList, action) => {
    if(action.type === 'DELETE_POST') {
        currPostList = currPostList.filter((post) => post.id != action.payload.postId)
    } else if (action.type === 'ADD_POST') {
        currPostList = [action.payload, ...currPostList]
    }
    return currPostList
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST)

    const addPost = (userId, postTitle, postBody, reaction, tags) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reaction: reaction,
                userId: userId,
                tags: tags
            }
        })
        
    }

    const deletePost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {postId}
        })
        
    }


    return <PostList.Provider value={
        {
            postList,
            addPost,
            deletePost,
        }
    }>{children}</PostList.Provider>
}

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'Chandi Choak To China',
        body: 'Hi friends, I am going to china for my vacation. Hope to enjoy a lot. Peace Out',
        reaction: 2,
        userId: 'user-9',
        tags: ["vacation", "China", "Enjoying"]
    },
    {
        id: '2',
        title: 'Pass ho gye bhai',
        body: 'Exam ke raat pehle padh ke bhi pass ho gye. Hard to believe',
        reaction: 15,
        userId: 'user-7',
        tags: ["Graduating", "Unbelievable"]
    },
]

export default PostListProvider