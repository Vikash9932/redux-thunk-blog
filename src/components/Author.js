import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

const Author = ({ user, fetchUser, userId }) => {
  React.useEffect(() => {
    fetchUser(userId);
  }, [fetchUser, userId]);

  const renderList = () => {
    if (!user) {
      return <div>Loading...</div>;
    }
    return user.name;
  };
  return <div className="header">{renderList()}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};
export default connect(mapStateToProps, { fetchUser })(Author);
