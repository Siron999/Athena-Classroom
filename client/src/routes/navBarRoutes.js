export const homeRoutes = {
    name: 'Home',
    to: '/',
    exact: true,
    icon: 'fas fa-home fa-2x',
};

export const profileRoutes = {
    name: 'Profile',
    to: '/profile',
    icon: 'fas fa-users fa-2x',
};

export const studentRoutes = {
    name: 'Students',
    to: '/students',
    icon: 'fas fa-school fa-2x',
};

const routes =[
    homeRoutes,
    profileRoutes,
    studentRoutes
];

export default routes;
