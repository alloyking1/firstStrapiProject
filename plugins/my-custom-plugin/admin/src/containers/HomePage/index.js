/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import MyCustomPlugin from '../../components/MyCustomPlugin'

const HomePage = () => {
  // return (
  //   <div>
  //     <h1>{pluginId}&apos;s HomePage</h1>
  //     <p>Happy coding</p>
  //   </div>
  // );
  return <MyCustomPlugin/>;
};

export default memo(HomePage);
