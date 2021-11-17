import { Link } from 'react-router-dom';
import Heading from './Heading';

const NotFound = () => {
  return (
    <div>
      <Heading name="not found" />

      <div style={{ padding: '4rem 6rem' }}>
        <h1 style={{ fontSize: '8rem', color: '#bac34e', margin: '.5rem 0' }}>
          404
        </h1>
        <h2
          style={{
            fontWeight: 'normal',
            fontSize: '2rem',
            color: '#666',
            marginBottom: '.5rem',
          }}
        >
          Sorry! This page could not be found
        </h2>
        <Link
          to="/"
          style={{ fontSize: '1.5rem', textDecoration: 'underline' }}
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
