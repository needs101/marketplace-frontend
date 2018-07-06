//@desc These are the sidebar items/routes
//@author Sylvia Onwukwe
//@co author Ifeoluwa Odewale
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Store from "@material-ui/icons/Store";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Loyalty from "@material-ui/icons/Loyalty";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Email from "@material-ui/icons/Email"
// core components/views
import DashboardPage from "../containers/Dashboard.jsx";
import UserProfile from "../containers/UserProfiles.jsx";
import Orders from "../containers/Orders.jsx";
import Products from "../containers/Products.jsx"
import Coupons from "../containers/Coupons.jsx"
import Shop from "../containers/Shops.jsx"
import Support from "../containers/Supports.jsx"
import UpgradeToPro from "../containers/UpgradeToPro.jsx";
import Banners from "../containers/Banners.jsx";
import Messages from "../containers/Messages.jsx"

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    exact: true,
    component: DashboardPage
  },
  {
    path: "/dashboard/messages",
    sidebarName: "Messages",
    navbarName: "Messages",
    icon: Email,
    component: Messages
  },
  
  {
    path: "/dashboard/products",
    sidebarName: "Products",
    navbarName: "Products",
    icon: Store,
    component: Products
  },
  {
    path: "/dashboard/orders",
    sidebarName: "Orders",
    navbarName: "Orders",
    icon: ShoppingCart,
    component: Orders
  },
  {
    path: "/dashboard/coupons",
    sidebarName: "Discount Coupons",
    navbarName: "Discount Coupons",
    icon: Loyalty,
    component: Coupons
  },
  {
    path: "/dashboard/banner",
    sidebarName: "Banners",
    navbarName: "Banners",
    icon: LocationOn,
    component: Banners
  },
  {
    path: "/dashboard/settings",
    sidebarName: "Store Settings",
    navbarName: "Store Settings",
    icon: Notifications,
    component: Shop
  },
  {
    path: "/dashboard/support",
    sidebarName: "Support Tickets",
    navbarName: "Support Tickets",
    icon: Notifications,
    component: Support
  },
  {
    path: "/dashboard/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/dashboard/upgrade-to-pro",
    sidebarName: "View Homepage",
    navbarName: "View Homepage",
    icon: Unarchive,
    component: UpgradeToPro
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;