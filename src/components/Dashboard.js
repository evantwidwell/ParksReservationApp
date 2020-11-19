import CurrentRsvs from '../containers/CurrentRsvs'
import ParkList from '../containers/ParkList'
import React from "react";
import {
  Container,
  
} from "@material-ui/core";

const Dashboard = (props) => {
return(
<Container maxWidth="md">
<h2>Welcome, {props.user[0].username}</h2>
<h5>Upcoming Reservations:</h5>
  <CurrentRsvs></CurrentRsvs>
<h5>Favorite Parks</h5>
  <ParkList></ParkList>
</Container>
)
}

export default Dashboard