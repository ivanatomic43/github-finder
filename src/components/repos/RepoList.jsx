import PropTypes from 'prop-types'
import RepoItem from './RepoItem';

function RepoList({repos}) {

  const renderedRepos = repos.map((repository) => {
    return <RepoItem key={repository.id} repository= {repository} />
  });

  return (
    <div className='rounded-lg shadow-lg bg-base-100'>
      <div className='card-body'>
        <h2 className='text-3xl my-4 font-bold card-title'>
          Top Repositories
        </h2>
        {renderedRepos}
      </div>
    </div>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired
}

export default RepoList