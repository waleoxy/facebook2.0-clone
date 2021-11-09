import { collection, getDocs, orderBy, query, doc } from '@firebase/firestore';
import React from 'react';
import {useCollection} from "react-firebase-hooks/firestore";
import { db } from '../firebase';
import Post from './Post';

function Posts() {

    const [realtimePost, loading, error] = useCollection(query(collection(db, "posts"), orderBy('timestamp', 'desc')));


    return (
        <div>
           {realtimePost?.docs.map(post=>(
               <Post
                key={post.id}
                name={post.data().name}
                email={post.data().email}
                image={post.data().image}
                message={post.data().message}
                timestamp={post.data().timestamp}
                postPix={post.data().postPix}
               />
           ))
           }
        </div>
    )
}

export default Posts
