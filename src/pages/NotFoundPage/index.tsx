import React from 'react';
import { navigate } from 'hookrouter';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import { LinkEnum } from '../../routes';
import TeamRocket from './assets/TeamRocket.png';
import s from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.logoNotFound}>
          <img src={TeamRocket} alt="Cloud PokeBall" />
        </div>
        <div>
          <span className={s.description} style={{ color: 'white' }}>
            The rocket team{' '}
          </span>
          <span className={s.description}>has won this time.</span>
        </div>
        <p className={s.textNotFound}>404</p>
        <Button color="yellow" size="large" onClick={() => navigate(LinkEnum.HOME)}>
          Return
        </Button>
      </Layout>
    </div>
  );
};

export default NotFoundPage;
