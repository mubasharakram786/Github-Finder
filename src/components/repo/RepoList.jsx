import React from 'react'

function RepoList({repos}) {
  return (
    <div>
        {repos.map((repo)=> <h3 key={repo.id} >{repo.name}</h3>)}
    </div>
  )
}

export default RepoList