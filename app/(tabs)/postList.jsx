import React from 'react';
import { FlatList } from 'react-native';
import BlogPost from './blog';

const PostList = ({ posts, onLike, onComment }) => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => (
        <BlogPost
          post={item}
          onLike={() => onLike(item.id)}
          onComment={(comment) => onComment(item.id, comment)}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default PostList;
