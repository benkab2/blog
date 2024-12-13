'use client';

import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid2 as Grid } from '@mui/material';

import type { Post as PostType } from '@/models/Post';

import { Post } from '@/components/post';

const Content: FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const loadPosts = async () => {
    try {
      const { data } = await axios.get('/api/posts', { params: { limit: 20 } });
      setPosts(data.posts);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <Container>
      <Grid container spacing={{ xs: 0, md: 4, lg: 6 }}>
        {posts.map(({ id, title, body }) => (
          <Grid key={id} size={{ xs: 12, md: 6, lg: 4 }}>
            <Post id={id} title={title} description={body} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export { Content };
