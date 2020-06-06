import Card from '../components/card';

export default function CustomHome({ user }) {
  return (
    <Card user={user} />
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://api.github.com/users/${params.username}`);
  const user = await res.json();

  return { props: { user } }
}