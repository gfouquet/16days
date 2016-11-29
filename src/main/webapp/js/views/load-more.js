import React from 'react'
import { connect } from 'react-redux'
import * as helpers from '../reducers'
import { fetchArticles } from '../actions'

const mapStateToProps = (state,params) => ({
  hasMore: helpers.hasMoreArticles(state),
  isFetching: state.isFetching
})

const LoadMore = ({hasMore, isFetching, fetchArticles}) => hasMore ? (
  <div className="row">
    <div className="col-xs-12">
      <button className="btn btn-default" onClick={fetchArticles} disabled={isFetching}>Load more</button>
    </div>
  </div>
) : null

export default connect(mapStateToProps, { fetchArticles })(LoadMore)
