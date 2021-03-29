import React from "react";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Text from "recharts/lib/component/Text";
import IconButton from "@material-ui/core/IconButton";
import {AccountCircle} from "@material-ui/icons";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
}));

export default function CustomerNavbar() {
    const classes = useStyles();
    const [open] = React.useState(true);

    return (
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <div component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    <Button size="large" onClick={event =>  window.location.href='/owner_home'} ><Text style={{color: 'white'}}>Home</Text></Button>
                    <Button size="large" onClick={event =>  window.location.href='/discover'}><Text style={{color: 'white'}}>Discover</Text></Button>
                    <Button size="large" onClick={event =>  window.location.href='/my_listings'}><Text style={{color: 'white'}}>My listings</Text></Button>
                    <Button size="large" onClick={event =>  window.location.href='/others'}><Text style={{color: 'white'}}>Others</Text></Button>
                    <Button size="large" onClick={event =>  window.location.href='/owner_settings'}><Text style={{color: 'white'}}>Settings</Text></Button>
                </div>
                <IconButton color="inherit">
                    <AccountCircle/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}







// import React from "react";
// import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
// import {Discover} from "../commons/Discover";
// import CustomerHome from "./OwnerHome";
// import MyAccount from "../commons/MyAccount";
// import {OwnerMyListings} from "./OwnerMyListings";
// import {Others} from "../commons/Others";
// import {CustomerSettings} from "../commons/CustomerSettings";
//
// // This site has 3 pages, all of which are rendered
// // dynamically in the browser (not server rendered).
// //
// // Although the page does not ever refresh, notice how
// // React Router keeps the URL up to date as you navigate
// // through the site. This preserves the browser history,
// // making sure things like the back button and bookmarks
// // work properly.
// // https://medium.com/@thejasonfile/basic-intro-to-react-router-v4-a08ae1ba5c42
// export default function CustomerNavbar() {
//     return (
//         <Router>
//             <div>
//                 <ul>
//                     <li>
//                         <Link to="/owner_home"><button>Home</button></Link>
//                     </li>
//                     <li>
//                         <Link to="/discover"><button>Discover</button></Link>
//                     </li>
//                     <li>
//                         <Link to="/my_account"><button>My account</button></Link>
//                     </li>
//                     <li>
//                         <Link to="/my_listings"><button>My reservations</button></Link>
//                     </li>
//                     <li>
//                         <Link to="/others"><button>Others</button></Link>
//                     </li>
//                     <li>
//                         <Link to="/settings"><button>OwnerSettings</button></Link>
//                     </li>
//                 </ul>
//
//                 <hr />
//
//                 {/*
//           A <Switch> looks through all its children <Route>
//           elements and renders the first one whose path
//           matches the current URL. Use a <Switch> any time
//           you have multiple routes, but you want only one
//           of them to render at a time
//         */}
//                 <Switch>
//                     <Route exact path="/customer_home">
//                         <CustomerHome />
//                     </Route>
//                     <Route path="/discover">
//                         <Discover />
//                     </Route>
//                     <Route path="/my_account">
//                         <MyAccount />
//                     </Route>
//                     <Route path="/my_listings">
//                         <OwnerMyListings />
//                     </Route>
//                     <Route path="/others">
//                         <Others />
//                     </Route>
//                     <Route path="/settings">
//                         <CustomerSettings />
//                     </Route>
//                 </Switch>
//             </div>
//         </Router>
//     );
// }
// // // You can think of these components as "pages"
// // // in your app.
// // function Home() {
// //     return (
// //         <div>
// //             <h2>Home</h2>
// //         </div>
// //     );
// // }
// //
// // function About() {
// //     return (
// //         <div>
// //             <h2>About</h2>
// //         </div>
// //     );
// // }
// //
// // function CustomerHome() {
// //     return (
// //         <div>
// //             <h2>CustomerHome</h2>
// //         </div>
// //     );
// // }
