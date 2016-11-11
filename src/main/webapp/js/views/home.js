import React, {Component} from 'react'
import {connect} from 'react-redux'
import Article from './article'
import LoadingArticle from './loading-article'
import * as actions from '../actions'

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
    this.props.fetchArticles()
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
        {
          isFetching ? <LoadingArticle/> : ""
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(Home)
