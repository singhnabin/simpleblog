import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import QueueIcon from "@material-ui/icons/Queue";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

export const adminOptions = [
  { Icon: DashboardIcon, name: "Dashboard", path: "/admin/dashboard" },
  {
    Icon: GroupAddIcon,
    name: "Add User",
    path: "/admin/dashboard/createuser",
  },
  { Icon: PersonIcon, name: "All Users", path: "/admin/dashboard/users" },
];

export const userOptions = [
  { Icon: DashboardIcon, name: "Dashboard", path: "/user/dashboard" },
  {
    Icon: QueueIcon,
    name: "Add Post",
    path: "/user/dashboard/addpost",
  },
];
