import React from 'react';
import Heading from '../../components/Heading';

const Blog = () => {
  return (
    <>
      <Heading name="blog" title="our Blog" />
      <div style={{ padding: '4rem 6rem' }}>
        <h1
          style={{ fontSize: '4rem', marginBottom: '.5rem', color: '#bac34e' }}
        >
          Coming soon!!!
        </h1>
        <h2 style={{ fontWeight: 'lighter', fontSize: '2rem', color: '#666' }}>
          we are still working on it ...
        </h2>
      </div>
    </>
  );
};

export default Blog;
