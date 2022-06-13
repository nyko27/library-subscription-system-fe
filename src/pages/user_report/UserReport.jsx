import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ErrorWindow from "../../components/error_window/ErrorWindow";
import { getUserFinanceReport, getUsersList } from "../../utils/api/reports_api";
import { Table } from "react-bootstrap";

export default function UserReport() {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [phone, setPhone] = useState('');

  const [userReportData, setUserReportData] = useState("");
  const [aggregations, setAggregations] = useState("");
  const [rents, setRents] = useState("");


  const getCorrectUser = (e) =>{
    e.preventDefault()

    for(var index=0; index < data.length; index++){
        if(data[index].library_user.phone_number == phone){

            
            getUserFinanceReport(data[index].library_user.id)            
            .then(data => setRents(data.data.rents))
            
            getUserFinanceReport(data[index].library_user.id)
            .then(data => setAggregations(data.data.aggregated))
        }
    }


  }
    

  React.useEffect(() => {
    getUsersList()
      .then(({ data }) => setData(data))
      .catch((err) => setError(err));
  }, []);

//   console.log(userReportData)

  return (
    <>
    <div className="form-wrapper">
        <h2 className="form-title">Input number of a user</h2>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Phone</Form.Label>
                        <Form.Control
                            onChange={(e) => setPhone(e.target.value)}
                            type="text"
                            placeholder="Enter name" />
                </Form.Group>
                <Button
                    onClick={ (e) => {getCorrectUser(e) }}
                    variant="outline-dark"
                    type="submit"
                    className="submit-button">
                    Submit
                </Button>
            </Form>
    </div>

      <div className="table-wrapper">
        
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th></th>
                <th>Total discount price</th>
                <th>Total paid</th>
                <th>Total paid fine</th>
                <th>Total paid pledge</th>
                <th>Total paid rent</th>
                <th>Total unpaid</th>
                <th>Total unpaid fine</th>
                <th>Total unpaid rent</th>
                
              </tr>
            </thead>
            <tbody>
                <tr>
                    <th></th>
                    <th>{aggregations.total_discount_price}</th>
                    <th>{aggregations.total_paid}</th>
                    <th>{aggregations.total_paid_fine}</th>
                    <th>{aggregations.total_paid_pledge}</th>
                    <th>{aggregations.total_paid_rent}</th>
                    <th>{aggregations.total_unpaid}</th>
                    <th>{aggregations.total_unpaid_fine}</th>
                    <th>{aggregations.total_unpaid_rent}</th>
                </tr>
                <br />
                <br />
                <br />
                <tr>
                    <th>Book title</th>
                    <th>Fine %</th>
                    <th>Discount %</th>
                    <th>Discount amount</th>
                    <th>Fine price</th>
                    <th>Pledge price</th>
                    <th>Total price</th>
                    <th>Rent start date</th>
                    <th>Rent end date</th>
                 </tr>
                {rents && rents.map((rent) => (
                    <tr>
                        <th>{rent.library_item.book.title}</th>
                        <th>{rent.damage_fine_percentage}</th>
                        <th>{rent.discount_percentage}</th>
                        <th>{rent.discount_price}</th>
                        <th>{rent.fine_price}</th>
                        <th>{rent.pledge_price}</th>
                        <th>{rent.total_price}</th>
                        <th>{rent.rent_start_date}</th>
                        <th>{rent.rent_end_date}</th>
                    </tr>

                ))}
                
                {console.log(rents.rents)}
            </tbody>
          </Table>
        
      </div>
      <ErrorWindow show={error} handleClose={() => setError("")} />
    </>
  );
}
