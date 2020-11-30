import { Suspense, useState, useLayoutEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { intersection } from 'lodash';

import { authAxios } from '../services/authAxios';

const ROLE_STATUS_UNKNOWN = 0;
const ROLE_STATUS_YES = 1;
const ROLE_STATUS_NO = 2;

const loading = <div>Loading...</div>;

export const ProtectedRoute = function ProtectedRoute(props) {

  const { lazyComponent: LazyComponent, roles, redirectTo, ...routeProps } = props;

  const [ roleStatus, setRoleStatus ] = useState(ROLE_STATUS_UNKNOWN);

  return <Route {...routeProps} component={() => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLayoutEffect(() => {

      if (roleStatus === ROLE_STATUS_UNKNOWN || roleStatus === ROLE_STATUS_NO) {

        let roleValidationPromise;

        // roleValidationPromise = authAxios.post('/api/users/has_one_or_more_roles', { roles });

        roleValidationPromise = Promise.resolve({
          data: { hasRole: intersection(roles, window.__app__?.userRoles).length > 0 }
        });

        roleValidationPromise.then(response => {

          if (response.data.hasRole) {
            setRoleStatus(ROLE_STATUS_YES);
          } else {
            setRoleStatus(ROLE_STATUS_NO);
          }

        });

      }

    });

    switch (roleStatus) {
      case ROLE_STATUS_YES:
        return <Suspense fallback={loading}>
          <LazyComponent />
        </Suspense>;
      case ROLE_STATUS_NO:
        return <Redirect to={redirectTo} />
      default:
        return loading;
    }

  }} />

};