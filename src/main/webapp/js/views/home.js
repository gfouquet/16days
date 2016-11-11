import React from 'react'
import {connect} from 'react-redux'
import Article from './article'

const mapStateToProps = ({articles}) => ({
  articles
})


const Home = ({articles}) => {
  console.log("home articles", articles)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12">
          <h1>Sixteen Days</h1>
        </div>
      </div>
      { articles.map(article =>
          <Article key={article.id} article={article}/>
        )
      }
    </div>
  )
}

export default connect(mapStateToProps)(Home)
