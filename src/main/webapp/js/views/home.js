import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import Article from './article'
import LoadingArticle from './loading-article'
import LoadMore from './load-more'

const mapStateToProps = ({articles, isFetching}) => ({
  articles,
  isFetching
})

class Home extends Component {
  componentDidMount() {
    this.fetchArticles()
    console.log("I HAZ MOUNTED")
  }

  fetchArticles() {
    this.props.fetchArticlesCount()
      .then(this.props.fetchArticles)
  }

  render() {
    console.log("thisprops", this.props)
    const {articles, isFetching} = this.props
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
        <LoadingArticle isFetching={isFetching}/>
        <LoadMore />
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(Home)
