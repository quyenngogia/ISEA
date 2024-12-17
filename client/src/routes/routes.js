import config from '~/config';
import AdminLayout from '~/layouts/AdminLayout/AdminLayout';
import UserLayout from '~/layouts/UserLayout/UserLayout';
import Home from '~/pages/Home';
import Recruitment from '~/pages/Recruitment/Recruitment';
import EmptyLayout from '~/layouts/EmptyLayout/EmptyLayout';
import Login from '~/pages/Login';

// don't need to login
const publicRouters = [
  {
    path: config.routes.dashboard.home,
    component: Home,
  },
  {
    path: config.routes.admin.login,
    component: Login,
    layout: EmptyLayout
  },
  {
    path: config.routes.dashboard.recruitment,
    component: Recruitment,
    layout: UserLayout
  },
  { 
    path: config.routes.admin.recruitment,
    component: Recruitment,
    layout: AdminLayout
  },
  { 
    path: config.routes.admin.training,
    component: Recruitment,
    layout: AdminLayout
  },
  { 
    path: config.routes.admin.performanceEvaluation,
    component: Recruitment,
    layout: AdminLayout
  },
  { 
    path: config.routes.admin.payrollAndBenefits,
    component: Recruitment,
    layout: AdminLayout
  },
  { 
    path: config.routes.admin.employeeRecords,
    component: Recruitment,
    layout: AdminLayout
  },
  { 
    path: config.routes.admin.reports,
    component: Recruitment,
    layout: AdminLayout
  },
  { 
    path: config.routes.admin.settings,
    component: Recruitment,
    layout: AdminLayout
  }
];

// need to login
const privateRouters = [
  // {
  //   path: config.dashboard,
  //   component: Dashboard,
  // },
  // { 
  //   path: config.admin,
  //   component: Admin
  // },
  // { 
  //   path: config.class,
  //   component: Admin
  // },
];

export { publicRouters, privateRouters };
