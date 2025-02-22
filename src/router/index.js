import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import Jobs from "../views/jobs/JobsView.vue";
import JobDetails from "../views/jobs/JobDetails.vue";
import SearchView from "../views/SearchView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true,
  },
  {
    path: "/search",
    name: "Search",
    component: SearchView,
  },
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // Add scroll behavior here
  scrollBehavior(to, from, savedPosition) {
    // If the user navigates to a new route, scroll to the top of the page
    if (savedPosition) {
      return savedPosition; // Preserve scroll position if navigating back/forward
    } else {
      return { top: 0 }; // Scroll to the top of the page
    }
  },
});

export default router;
