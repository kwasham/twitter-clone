import { SparklesIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react'
import Input from './Input'
import Post from './Post'
import {db} from '../firebase'
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";

function Feed() {
    const [posts, setPosts] = useState([])
    const { data: session } = useSession();


  // CLEAN
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="max-w-2xl flex-grow border-l border-r border-gray-700 text-white sm:ml-[73px] xl:ml-[370px]">
      <div className="sticky top-0 z-50 flex items-center border-b border-gray-700 bg-black py-2 px-3 text-[#d9d9d9] sm:justify-between">
        <h2 className="text-lg font-bold sm:text-xl">Home</h2>
        <div className="hoverAnimation ml-auto flex h-9 w-9 items-center justify-center xl:px-0">
          <SparklesIcon className="h-5 w-5 text-white" />
        </div>
      </div>
      <Input />
      <div className='pb-72'>
        {posts.map(post => (
            <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
  )
}

export default Feed
