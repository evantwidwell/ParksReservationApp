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
const CurrentRsvs = (props) => {
  console.log(props)
  return (
    <Container maxWidth="lg" style={styles.main} >
      
      <div className="flex-container"></div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Park</TableCell>
            <TableCell>Dates</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.reservations.map((rsv, idx) => (
            <TableRow key={rsv.id}>
              <TableCell component="th" scope="row">
                {rsv.id}
              </TableCell>
              <TableCell>
                <Link to={`/listing/${rsv.id}`}>{rsv["park"]}</Link>
              </TableCell>
              <TableCell>{rsv["dates"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default CurrentRsvs;
