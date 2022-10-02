import { Component } from 'react';
import { Routes, Route, HashRouter as Router, Navigate } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import AboutPage from 'pages/AboutPage';
import FormsPage from 'pages/FormsPage';
import PageNotFound from 'pages/PageNotFound';
import DrawerLayout from 'widgets/DrawerLayout';
import { ROUTE_PATH } from 'shared/common/constants';
import 'app/lib/style.scss';

class MainRoutes extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path={ROUTE_PATH.INDEX} element={<DrawerLayout />}>
            <Route index element={<MainPage />} />
            <Route path={ROUTE_PATH.ABOUT_US} element={<AboutPage />} />
            <Route path={ROUTE_PATH.FORMS} element={<FormsPage />} />
            <Route path={ROUTE_PATH.NOT_FOUND} element={<PageNotFound />} />
            <Route path="*" element={<Navigate to={ROUTE_PATH.NOT_FOUND} replace />} />
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default MainRoutes;
