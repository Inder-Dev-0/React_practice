import { useCallback } from "react";
import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    addInitialPosts: () => {},
    deletePost: () => {},
})

const postListReducer = (currPostList, action) => {
    if(action.type === 'DELETE_POST') {
        currPostList = currPostList.filter((post) => post.id != action.payload.postId)
    } else if (action.type === 'ADD_INITIAL_POSTS'){
        currPostList = action.payload.posts
    } else if (action.type === 'ADD_POST') {
        currPostList = [action.payload, ...currPostList]
    }
    return currPostList
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, [])

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

    const addInitialPosts = useCallback((posts) => {
        dispatchPostList({
            type: 'ADD_INITIAL_POSTS',
            payload: {
                posts,
            }
        })
    }, [dispatchPostList])

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
            addInitialPosts,
            deletePost,
        }
    }>{children}</PostList.Provider>
}

export default PostListProvider