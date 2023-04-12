import { Link } from 'react-router-dom';

const Error = () => (
  <section className="section">
    <h2>404</h2>
    <p>page not found</p>
    <Link to="/rockets">back home</Link>
  </section>
);
export default Error;
