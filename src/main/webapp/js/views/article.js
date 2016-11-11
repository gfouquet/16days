import React from 'react'

const Article = ({article}) => (
  <div className="row">
    <div className="col-xs-12">
      <h2>{article.title}</h2>
      <div>
        {article.content}
      </div>
    </div>
  </div>
)

export default Article
