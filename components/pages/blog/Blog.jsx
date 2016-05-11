import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import BlogDetails from './BlogDetails';
import BlogList from './BlogList';
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../../../redux/actions';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: []
    };
  }

  componentWillMount() {
    this.props.fetchBlogPosts();
  }

  render() {
    if(this.props.params.slug && !_.isEmpty(this.props.blogPosts)) {
      var slug = this.props.params.slug;
      var blogPost = _.find(this.props.blogPosts, function(blogPost) { return _.isEqual(blogPost.slug, slug); });
      return (
        <div>
          <BlogDetails blogPost={blogPost}/>
        </div>
      );
    }
    else {
      var blogPosts = this.props.blogPosts;
      return (
        <div>
          <BlogList blogPosts={blogPosts}/>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    blogPosts: state.default.blogPosts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBlogPosts: function () {
      return dispatch(fetchBlogPosts());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
