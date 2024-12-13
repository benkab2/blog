import { Container } from '@mui/material';

import { Typography } from '@/components/typography';
import { Content } from '@/components/content';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles['page__header']}>
        <Container className={styles['page__header__container']}>
          <Typography className={styles['page__header__title']}>
            What's on the news today
          </Typography>
        </Container>
      </div>
      <div className={styles['page__content']}>
        <Content />
      </div>
    </div>
  );
}
