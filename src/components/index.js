import { lazy } from 'react';
import Loader from './Common/Loader';

const AsyncPosts = lazy(() =>
  import(
    './Posts/Posts'
    /* webpackChunkName: "posts-page" */
  ),
);
const AsyncPostDetail = lazy(() =>
  import(
    './PostDetail/PostDetail'
    /* webpackChunkName: "post-details-page" */
  ),
);

export { AsyncPosts, AsyncPostDetail, Loader };
