import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CustomerHome from "./components/customer/CustomerHome";
import MyAccount from "./components/commons/MyAccount";
import {Others} from "./components/commons/Others";
import CustomerSettings from "./components/customer/CustomerSettings";
import OwnerHome from "./components/owner/OwnerHome";
import OwnerMyListings from "./components/owner/OwnerMyListings";
import Discover from "./components/commons/Discover";
import ChoosePaymentPlans from "./components/owner/promote_listing/ChoosePaymentPlans"
import PromotedSuccessfully from "./components/owner/promote_listing/PromotedSuccessfully";
import CreateEvent from "./components/owner/manage_events/CreateEvent";
import EventCreatedSuccessfully from "./components/owner/manage_events/EventCreatedSuccessfully";
import OwnerListingDetails from "./components/owner/OwnerListingDetails";
import MyListingsPicture1 from "./assets/mylistings_picture_1.jpg";
import MyListingsPicture2 from "./assets/mylistings_picture_2.jpg";
import MyListingsPicture3 from "./assets/mylistings_picture_3.jpg";
import OwnerEditListing from "./components/owner/OwnerEditListing";
import OwnerEditListingSuccessfully from "./components/owner/OwnerEditListingSuccessfully";
import ChoosePaymentMechanism from "./components/commons/payment_mechanisms/ChoosePaymentMechanism";
import CreditCardDetails from "./components/commons/payment_mechanisms/CreditCardDetails";
import SuccessfulPayment from "./components/commons/payment_mechanisms/SuccessfulPayment";
import DiscountCodeDetails from "./components/commons/payment_mechanisms/DiscountCodeDetails";
import CustomerRequestReservation from "./components/customer/CustomerRequestReservation";
import CustomerListingDetails from "./components/customer/CustomerListingDetails";
import GenerateDiscountCodePage1 from "./components/owner/GenerateDiscountCodePage1";
import GenerateDiscountCodePage2 from "./components/owner/GenerateDiscountCodePage2";
import FollowSpace from "./components/customer/FollowSpace";
import CustomerMyReservations from "./components/customer/CustomerMyReservations";
import CustomerCreateTeam from "./components/customer/manage_teams/CustomerCreateTeam";
import CustomerManageTeams from "./components/customer/manage_teams/CustomerManageTeams";
import TeamDetails from "./components/customer/manage_teams/TeamDetails";
import ManageRequests from "./components/customer/manage_teams/ManageRequests";
import OwnerSettings from "./components/owner/OwnerSettings";

import Chat from "./components/customer/Chat";
import WriteReviewPage from "./components/customer/WriteReviewPage";
import SeeReviewedPage from "./components/customer/SeeReviewedPage";

ReactDOM.render(
    <Router>
        <div>
            <Route path="/my_account" component={MyAccount}/>
            <Route path="/others" component={Others}/>

            {/* CUSTOMER */}
            <Route exact path="/customer_home" component={CustomerHome}/>
            <Route path="/discover" component={Discover}/>
            <Route path="/my_reservations" component={CustomerMyReservations}/>
            <Route path="/manage_teams" component={CustomerManageTeams}/>
            <Route path="/create_team" component={CustomerCreateTeam}/>
            <Route path="/team_details" component={TeamDetails}/>
            <Route path="/manage_team_requests" component={ManageRequests}/>
            <Route path="/customer_settings" component={CustomerSettings}/>
            <Route path="/write_review" component={WriteReviewPage}/>
            <Route path="/see_review">
                <SeeReviewedPage
                    review=""
                    rating={0.0}
                />
            </Route>

            {/* OWNER */}
            <Route exact path="/owner_home" component={OwnerHome}/>
            <Route path="/owner_settings" component={OwnerSettings}/>

            <Route path="/my_listings" component={OwnerMyListings} />
            <Route path="/choose_payment_plans" component={ChoosePaymentPlans} />
            <Route path="/promoted_successfully" component={PromotedSuccessfully} />
            <Route path="/create_event" component={CreateEvent} />
            <Route path="/event_created_successfully" component={EventCreatedSuccessfully}/>
            <Route path="/edit_listing_successfully" component={OwnerEditListingSuccessfully}/>
            <Route path="/edit_listing/1">
                <OwnerEditListing
                    title="Cluj Hub Offices"
                    image={MyListingsPicture1}
                    details="In central Cluj-Napoca, I offer 3 office spaces to freelancers that
                     wish for have a quiet workplace where they can stay motivated.
                      Cluj Hub is a renown popular office space that has been in place since 2005.
                       It hosted many events over the years and many people have chosen to work here
                        instead of from home thanks to the central location and relaxing atmosphere."
                    totalSpaces={["18 desks for 4 people", "15 desks for 3 people", "3 conference rooms"]}
                    mapLatitude={46.77309310344325}
                    mapLongitude={23.589596549792887}
                    zoom={18}
                />
            </Route>

            <Route path="/listing/1" >
                <OwnerListingDetails
                    title="Cluj Hub Offices"
                    image={MyListingsPicture1}
                    details="In central Cluj-Napoca, I offer 3 office spaces to freelancers that
                     wish to have a quiet workplace where they can stay motivated.
                      Cluj Hub is a renown popular office space that has been in place since 2005.
                       It hosted many events over the years and many people have chosen to work here
                        instead of from home thanks to the central location and relaxing atmosphere."
                    totalSpaces={["18 desks for 4 people", "15 desks for 3 people", "3 conference rooms"]}
                    mapLatitude={46.77309310344325}
                    mapLongitude={23.589596549792887}
                    zoom={18}
                    editListingLink="/edit_listing/1"
                />
            </Route>
            <Route path="/edit_listing/2">
                <OwnerEditListing
                    title="Cluj Business Center Offices"
                    image={MyListingsPicture2}
                    details="I offer a big number of offices suited for any number of people. Freelancers and teams
                    are welcome alike,a s the whole building can satisfy any working and devoted person's needs. There are
                   plenty of rooms entirely for relaxation, so you don't overwork yourself."
                    totalSpaces={["12 desks for 4 people", "8 desks for 3 people", "7 conference rooms for 20 people", "5 conference rooms for 10 people"]}
                    mapLatitude={46.78297577772663}
                    mapLongitude={23.607991812187045}
                    zoom={18}
                />
            </Route>
            <Route path="/listing/2" >
                <OwnerListingDetails
                    title="Cluj Business Center Offices"
                    image={MyListingsPicture2}
                    details="I offer a big number of offices suited for any number of people. Freelancers and teams
                    are welcome alike,a s the whole building can satisfy any working and devoted person's needs. There are
                   plenty of rooms entirely for relaxation, so you don't overwork yourself."
                    totalSpaces={["12 desks for 4 people", "8 desks for 3 people", "7 conference rooms for 20 people", "5 conference rooms for 10 people"]}
                    mapLatitude={46.78297577772663}
                    mapLongitude={23.607991812187045}
                    zoom={18}
                    editListingLink="/edit_listing/2"
                />
            </Route>
            <Route path="/edit_listing/3">
                <OwnerEditListing
                    title="The Office Cluj-Napoca"
                    image={MyListingsPicture3}
                    details="The Office Cluj-Napoca is a big location and sometimes a bit noisy; however
                    I offer some quiet workspaces located strategically as to offer as little noise as possible
                    from the outside, or from the other people in the hall. They are located after the second
                    right corner as you enter, having plenty of space separated from the other workspaces
                    that are in this building."
                    totalSpaces={["8 desks for 4 people", "5 desks for 3 people", "10 conference rooms for 20 people", "15 conference rooms for 10 people"]}
                    mapLatitude={46.77640854153428}
                    mapLongitude={23.604090413303393}
                    zoom={18}
                />
            </Route>
            <Route path="/listing/3" >
                <OwnerListingDetails
                    title="The Office Cluj-Napoca"
                    image={MyListingsPicture3}
                    details="The Office Cluj-Napoca is a big location and sometimes a bit noisy; however
                    I offer some quiet workspaces located strategically as to offer as little noise as possible
                    from the outside, or from the other people in the hall. They are located after the second
                    right corner as you enter, having plenty of space separated from the other workspaces
                    that are in this building."
                    totalSpaces={["8 desks for 4 people", "5 desks for 3 people", "10 conference rooms for 20 people", "15 conference rooms for 10 people"]}
                    mapLatitude={46.77640854153428}
                    mapLongitude={23.604090413303393}
                    zoom={18}
                    editListingLink="/edit_listing/3"
                />
            </Route>
            <Route path="/choose_payment_mechanism" component={ChoosePaymentMechanism} />
            <Route path="/credit_card_details" component={CreditCardDetails} />
            <Route path="/successful_payment" component={SuccessfulPayment} />
            <Route path="/discount_code_details" component={DiscountCodeDetails} />
            <Route path="/customer_request_reservation" component={CustomerRequestReservation} />
            <Route path="/generate_discount_code_page1" component={GenerateDiscountCodePage1}/>
            <Route path="/generate_discount_code_page2" component={GenerateDiscountCodePage2}/>
            <Route path="/follow_space" component={FollowSpace}/>
            <Route path="/customer/listing/1" >
                <CustomerListingDetails
                    title="Cluj Hub Offices"
                    image={MyListingsPicture1}
                    details="In central Cluj-Napoca, I offer 3 office spaces to freelancers that
                     wish for have a quiet workplace where they can stay motivated.
                      Cluj Hub is a renown popular office space that has been in place since 2005.
                       It hosted many events over the years and many people have chosen to work here
                        instead of from home thanks to the central location and relaxing atmosphere."
                    totalSpaces={["18 desks for 4 people", "15 desks for 3 people", "3 conference rooms"]}
                    mapLatitude={46.77309310344325}
                    mapLongitude={23.589596549792887}
                    zoom={18}
                />
            </Route>
            <Route path="/customer/listing/2" >
                <CustomerListingDetails
                    title="Cluj Business Center Offices"
                    image={MyListingsPicture2}
                    details="I offer a big number of offices suited for any number of people. Freelancers and teams
                    are welcome alike,a s the whole building can satisfy any working and devoted person's needs. There are
                   plenty of rooms entirely for relaxation, so you don't overwork yourself."
                    totalSpaces={["12 desks for 4 people", "8 desks for 3 people", "7 conference rooms for 20 people", "5 conference rooms for 10 people"]}
                    mapLatitude={46.78297577772663}
                    mapLongitude={23.607991812187045}
                    zoom={18}
                />
            </Route>
            <Route path="/customer/listing/3" >
                <CustomerListingDetails
                    title="The Office Cluj-Napoca"
                    image={MyListingsPicture3}
                    details="The Office Cluj-Napoca is a big location and sometimes a bit noisy; however
                    I offer some quiet workspaces located strategically as to offer as little noise as possible
                    from the outside, or from the other people in the hall. They are located after the second
                    right corner as you enter, having plenty of space separated from the other workspaces
                    that are in this building."
                    totalSpaces={["8 desks for 4 people", "5 desks for 3 people", "10 conference rooms for 20 people", "15 conference rooms for 10 people"]}
                    mapLatitude={46.77640854153428}
                    mapLongitude={23.604090413303393}
                    zoom={18}
                />
            </Route>
            <Route path="/team_chat">
                <Chat title = "" messages = {[{
                senderId: "johndoe",
                text: "Hello guys!"},
                {
                senderId: "janedoe",
                text: "Let's find an office space together!"}
                ]}
                />
            </Route>
            <Route path="/chat_customer">
                <Chat title = "Stars team" messages = {[{
                senderId: "you",
                text: "Hello! I'm interested in finding out more about this place."},
                {
                senderId: "johndoe",
                text: "Sure! What would you like to know?"}
                ]}/>
            </Route>
            <Route path="/chat">
                <Chat title = "" messages = {[{
                senderId: "johndoe",
                text: "Hello!"}
                ]}/>
            </Route>
        </div>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
