import fetch from 'isomorphic-unfetch';
import Card from '../components/card';
import config from '../config';

export default function Home({ user }) {
  return (
    <Card user={user} />
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://api.github.com/users/${config.GITHUB_USERNAME}`);
  const user = await res.json();
  return {
    props: {
      user,
    },
  }
}
