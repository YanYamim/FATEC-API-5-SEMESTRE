

import DefaultLayout from "@/layouts/default/DefaultLayout.vue"
import CardListView from "@/pages/core/CardListView.vue"
import DashboardByProject from "@/pages/core/DashboardByProject"
import Issues from "@/pages/core/Issues"
import Overview from "@/pages/core/Overview"
import User from "@/pages/core/User"

export default [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "overview",
        name: "overview",
        component: Overview,
      },
      {
        path: "dashboard-by-project",
        name: "dashboard-by-project",
        component: DashboardByProject,
      },
      {
        path: "issues",
        name: "issues",
        component: Issues,
      },
      {
        path: "user",
        name: "user",
        component: User,
      }
    ],
  },
]
