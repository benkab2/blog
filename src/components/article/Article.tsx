'use client';

import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Container, Divider, Grid2 as Grid, Paper } from '@mui/material';
import { useParams } from 'next/navigation';

import type { Post as PostType } from '@/models/Post';
import type { Comment as CommentType } from '@/models/Comment';
import { capitalizeFirstLetter } from '@/utils/helper';

import { Typography } from '../typography';

import pageStyles from '@/app/page.module.scss';
import styles from './Article.module.scss';

const Article: FC = () => {
  const { id } = useParams<{ id: string }>();

  const [post, setPost] = useState<PostType | undefined>(undefined);
  const [comments, setComments] = useState<CommentType[]>([]);

  const loadPost = async (postId: string) => {
    try {
      const {
        data: { post: postData }
      } = await axios.get('/api/posts', { params: { id: postId } });
      setPost(postData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const loadComments = async () => {
    try {
      const {
        data: { comments }
      } = await axios.get('/api/comments');

      const postComments = comments.filter((c: CommentType) => c.postId.toString() === id);
      setComments(postComments);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (id) {
      loadPost(id);
      loadComments();
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const { title, body } = post;

  return (
    <div className={pageStyles.page}>
      <div className={pageStyles['page__header']}>
        <Container className={pageStyles['page__header__container']}>
          <Typography className={styles['article__title']}>
            {capitalizeFirstLetter(title)}
          </Typography>
        </Container>
      </div>
      <Container className={pageStyles['page__content']}>
        <Grid container spacing={{ xs: 0, md: 4, lg: 6 }}>
          <Grid size={{ xs: 12, md: 7, lg: 8 }}>
            <Typography className={styles['article__text']}>{body}</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5, lg: 4 }}>
            <Typography className={styles['article__section-title']}>Comments</Typography>
            <br />
            {comments.map(({ id, name, email, body }) => (
              <Paper key={id} style={{ padding: '1rem', marginBottom: '1rem' }}>
                <Typography className={styles['article__comment__title']}>{name}</Typography>
                <Typography className={styles['article__comment__email']}>{email}</Typography>
                <Typography className={styles['article__comment__text']}>{body}</Typography>
              </Paper>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export { Article };
