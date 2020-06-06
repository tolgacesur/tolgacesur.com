import fetch from 'isomorphic-unfetch';
import Card from '../components/card';

export default function Home({ user }) {
  return (
    <Card user={user} />
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/tolgacesur');
  const user = await res.json();
  return {
    props: {
      user,
    },
  }
}
