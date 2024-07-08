import AddUser from "./pages/AddUser";
import UpdateAllergies from "./pages/UpdateAllergies";
import UpdateEmail from "./pages/UpdateEmail";
import UpdatePhone from "./pages/UpdatePhone";
import Users from "./pages/Users";

export const routes = [
    {
        path: '/',
        component: <Users />
    },
    {
        path: '/add-user',
        component: <AddUser />
    },
    {
        path: '/update-email/:id',
        component: <UpdateEmail />
    },
    {
        path: '/update-phone/:id',
        component: <UpdatePhone />
    },
    {
        path: '/update-allergies/:id',
        component: <UpdateAllergies />
    }
]