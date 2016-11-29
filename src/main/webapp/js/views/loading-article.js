import React from 'react'

const LoadingArticle = ({isFetching}) => isFetching ? (
  <div className="row">
    <div className="col-xs-12">
      <h2>Loading</h2>
      <div>
        <img src="ajax-loader.gif" />
      </div>
    </div>
  </div>
) : null

export default LoadingArticle
