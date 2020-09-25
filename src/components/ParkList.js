import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "../App.css";

const styles ={
  main:{
  background: "#F1EEE5"
  }
}
const ParkList = (props) => {
  console.log(props)
  return (
    <Container maxWidth="lg" style={styles.main} >
      
      <div className="flex-container"></div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Park</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Available?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.parks.map((park, idx) => (
            <TableRow key={park.id}>
              <TableCell component="th" scope="row">
                {park.id}
              </TableCell>
              <TableCell>
                <Link to={`/listing/${park.id}`}>{park["park"]}</Link>
              </TableCell>
              <TableCell>{park["address"]}</TableCell>
              <TableCell>{park["address"]}</TableCell>
              <TableCell>{park["available"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default ParkList;