import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  if (action.type === "DELETE_POST") {
    currPostList = currPostList.filter(
      (post) => post.id != action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    currPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    currPostList = [action.payload, ...currPostList];
  }
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false)
    

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = useCallback(
    (posts) => {
      dispatchPostList({
        type: "ADD_INITIAL_POSTS",
        payload: {
          posts,
        },
      });
    },
    [dispatchPostList]
  );

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  useEffect( () => {
    setFetching(true)
    const controller = new AbortController()
    const signal = controller.signal

    fetch('https://dummyjson.com/posts', { signal })
        .then((res) => res.json())
        .then(data => {
            addInitialPosts(data.posts)
            setFetching(false)
        })

    return () => {
        
    }
}, [])

  return (
    <PostList.Provider
      value={{
        postList,
        fetching,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;