import React, { useState } from "react";
import "./LibraryReport.css";
import ErrorWindow from "../../components/error_window/ErrorWindow";
import { getLibraryFinanceReport } from "../../utils/api/reports_api";
import { Table } from "react-bootstrap";

export default function LibraryReport() {
  const [data, setData] = useState();
  const [error, setError] = useState("");

  React.useEffect(() => {
    getLibraryFinanceReport()
      .then(({ data }) => setData(data))
      .catch((err) => setError(err));
  }, []);

  return (
    <>
      <div className="table-wrapper">
        {data && (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Rent Start Date</th>
                <th>Expected Rent End Date</th>
                <th>Rent End Date</th>
                <th>Pledge Price</th>
                <th>Discount Percentage</th>
                <th>Discount Price</th>
                <th>Rent Price Before Discount</th>
                <th>Rent Price After Discount</th>
                <th>Damage Fine Percentage</th>
                <th>Fine Price</th>
                <th>Total Price</th>
                <th>Book</th>
                <th>Books Left</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
              {data.rents.map((rent) => (
                <tr>
                  <td>{rent.id}</td>
                  <td>{rent.rent_start_date}</td>
                  <td>{rent.expected_rent_end_date}</td>
                  <td>{rent.rent_end_date}</td>
                  <td>{rent.pledge_price}</td>
                  <td>{rent.discount_percentage} %</td>
                  <td>{rent.discount_price}</td>
                  <td>{rent.rent_price_before_discount}</td>
                  <td>{rent.rent_price_after_discount}</td>
                  <td>{rent.damage_fine_percentage}</td>
                  <td>{rent.fine_price}</td>
                  <td>{rent.total_price}</td>
                  <td>
                    {rent.library_item.book.title} by{" "}
                    {rent.library_item.book.author}
                  </td>
                  <td>{rent.library_item.quantity}</td>
                  <td>
                    {rent.user.name} {rent.user.surname}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        {data && (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Total Received Rent Price</th>
                <th>Total Received Pledge Price</th>
                <th>Total Received Fine Price</th>
                <th>Total Received</th>
                <th>Total Pending Rent Price</th>
                <th>Total Pending Fine Price</th>
                <th>Total Pending</th>
                <th>Total Discount Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.aggregated.total_received_rent_price}</td>
                <td>{data.aggregated.total_received_pledge_price}</td>
                <td>{data.aggregated.total_received_fine_price}</td>
                <td>{data.aggregated.total_received}</td>
                <td>{data.aggregated.total_pending_rent_price}</td>
                <td>{data.aggregated.total_pending_fine_price}</td>
                <td>{data.aggregated.total_pending}</td>
                <td>{data.aggregated.total_discount_price}</td>
              </tr>
            </tbody>
          </Table>
        )}
      </div>
      <ErrorWindow show={error} handleClose={() => setError("")} />
    </>
  );
}
