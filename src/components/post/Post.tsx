import React, { FC } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

import { capitalizeFirstLetter } from '@/utils/helper';

import { Typography } from '@/components/typography';

import styles from './Post.module.scss';

interface PostProps {
  id: number;
  title: string;
  description: string;
}

const Post: FC<PostProps> = ({ id, title, description }) => {
  const router = useRouter();

  return (
    <Card data-testid="post">
      <CardMedia
        data-testid="post-image"
        sx={{ height: 200 }}
        image={`https://picsum.photos/id/${id}/900/200`}
        title="green iguana"
      />
      <CardContent>
        <Typography
          data-testid="post-title"
          className={styles['post__title']}
          gutterBottom
          variant="h5"
          component="div">
          {capitalizeFirstLetter(title)}
        </Typography>
        <Typography
          data-testid="post-body"
          className={styles['post__text']}
          variant="body2"
          sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => router.push('posts/' + id)} data-testid="post-button" size="small">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export { Post };
