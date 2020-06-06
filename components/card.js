export default function Home({ user }) {

  const getUrlWithHttp = (url) => {
    return !/^(?:f|ht)tps?\:\/\//.test(url) ? `http://${url}` : url;
  }

  return (
    <div className="card">  
      <div className="header">
        <img className="avatar" src={user.avatar_url} alt={user.name}/>
        <h1>{user.name}</h1>
      </div>

      {
        user.bio && (
          <p className="bio">{user.bio}</p>
        )
      }

      <div className="info">
        {
          user.company && (
            <div className="card-item">
              <img width="25" height="25" src="icons/company.svg"/>

              {
                user.company.startsWith('@') ? (
                  <a href={`https://github.com/${user.company.substring(1)}`} target="_blank">{user.company.substring(1)}</a>
                ) : <div>{user.company}</div>
              }
            </div>
          )
        }

        {
          user.email && (
            <div className="card-item">
              <img width="25" height="25" src="icons/email.svg"/>
              <div>{user.email}</div>
            </div>
          )
        }

        {
          user.blog && (
            <div className="card-item">
              <img width="25" height="25" src="icons/www.svg"/>
              <div>
                <a href={getUrlWithHttp(user.blog)} target="_blank">{user.blog}</a>
              </div>
            </div>
          )
        }

        {
          user.blog && (
            <div className="card-item">
              <img width="30" height="30" src="icons/location.svg"/>
              <div>{user.location}</div>
            </div>
          )
        }
      </div>

      {
        user.hireable && (
          <div className="hire-me">Hire me!</div>
        )
      }

      <div className="social">
        {
          user.twitter_username && (
            <a href={`https://twitter.com/${user.twitter_username}`} target="_blank">
              <img width="50" height="50" src="icons/twitter.svg"/>
            </a>
          )
        }
        <a href={user.html_url} target="_blank">
          <img width="50" height="50" src="icons/github.svg"/>
        </a>
      </div>
    </div>
  )
}