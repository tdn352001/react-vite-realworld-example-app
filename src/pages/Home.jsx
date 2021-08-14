import classNames from 'classnames'
import React from 'react'
import { ArticleList, PopularTags } from '../components'
import { useAuth } from '../hooks'

function Home() {
  const { isAuth } = useAuth()
  const [filters, setFilters] = React.useState({ tag: '', offset: null, feed: isAuth })

  React.useEffect(() => {
    setFilters({ offset: 0, feed: isAuth, tag: '' })
  }, [isAuth])

  function onTagClick(tag) {
    setFilters({ offset: 0, feed: false, tag })
  }

  function onGlobalFeedClick() {
    setFilters({ offset: 0, tag: '', feed: false })
  }

  function onFeedClick() {
    setFilters({ offset: 0, tag: '', feed: true })
  }

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                {isAuth && (
                  <li className="nav-item">
                    <button
                      onClick={onFeedClick}
                      type="button"
                      className={classNames('nav-link', {
                        active: filters.feed,
                      })}
                    >
                      Your Feed
                    </button>
                  </li>
                )}
                <li className="nav-item">
                  <button
                    type="button"
                    className={classNames('nav-link', {
                      active: !filters?.tag && !filters.feed,
                    })}
                    onClick={onGlobalFeedClick}
                  >
                    Global Feed
                  </button>
                </li>
                {filters?.tag && (
                  <li className="nav-item">
                    <a className="nav-link active"># {filters?.tag}</a>
                  </li>
                )}
              </ul>
            </div>
            <ArticleList filters={filters} />
          </div>
          <div className="col-md-3">
            <PopularTags onTagClick={onTagClick} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
