import { createBrowserRouter } from 'react-router-dom';
import Home from '../container/Home';
import App from '../app';
import NotFound from '../container/NotFound';
import Profile from '../container/Profile';
import ContactUs from '../container/ContactUs';
import SignUp from '../component/SignUp'; 
import Login from '../component/Login';

const routes = createBrowserRouter([
	{
	  path: "/",
	  element: <App />,
	  children: [
		{
      exact: true,
		  path: "home",
		  element: <Home />
		},
    {
      exact: true,
		  path: "profile",
		  element: <Profile />
		},
    {
      exact: true,
		  path: "contactus",
		  element: <ContactUs />
		},
    {
      exact: true,
		  path: "signUp",
		  element: <SignUp />
		},
    {
      exact: true,
		  path: "login",
		  element: <Login />
		},
		{
			path: "*",
			element: <NotFound />
		}
	  ],
	},
]);

export default routes;