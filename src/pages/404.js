import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './404.module.css';

import Button from '../components/Button';
import Container from '../components/Container';
import FormInputField from '../components/FormInputField/FormInputField';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
  };

  return (
    <Layout disablePaddingBottom>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>What are you looking for?</h1>
          <h2> whatever it is- it is not here.</h2>
          <p>
            Uh oh, looks like the page you are looking for has moved or no
            longer exists.
          </p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.searchContainer}>
              <FormInputField
                id={'name'}
                value={search}
                handleChange={(_, e) => setSearch(e)}
                type={'text'}
              />
              <Button type={'submit'} level={'primary'}>
                search
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
