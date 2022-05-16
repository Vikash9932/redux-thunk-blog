import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
import Author from './Author';

const PostList = ({ fetchPosts, posts }) => {
  React.useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const renderList = () =>
    posts.map((post) => (
      <div className="item" key={post.id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          <Author userId={post.userId} />
        </div>
      </div>
    ));
  return <div className="ui relaxed divided list">{renderList()}</div>;
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
