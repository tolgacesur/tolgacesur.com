import fetch from 'isomorphic-unfetch';
import Card from '../components/card';
import Router from 'next/router';

export default function CustomPage({ user }) {
  if (!user.name) {
    Router.push('/404');
    return null;
  }

  return (
    <Card user={user} />
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://api.github.com/users/${params.username}`);
  const user = await res.json();
  return {
    props: {
      user,
    },
  }
}
