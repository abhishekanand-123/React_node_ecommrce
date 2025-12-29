import React from "react";

function BasicTables() {
  return (
    <>
      <div className="page-header">
        <h3 className="page-title">Basic Tables</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Tables</li>
            <li className="breadcrumb-item active">Basic tables</li>
          </ol>
        </nav>
      </div>

      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Basic Table</h4>

              <table className="table">
                <thead>
                  <tr>
                    <th>Profile</th>
                    <th>Vat No.</th>
                    <th>Created</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jacob</td>
                    <td>53275531</td>
                    <td>12 May 2017</td>
                    <td>
                      <span className="badge badge-danger">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Messsy</td>
                    <td>53275532</td>
                    <td>15 May 2017</td>
                    <td>
                      <span className="badge badge-warning">In progress</span>
                    </td>
                  </tr>
                  <tr>
                    <td>John</td>
                    <td>53275533</td>
                    <td>14 May 2017</td>
                    <td>
                      <span className="badge badge-info">Fixed</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Peter</td>
                    <td>53275534</td>
                    <td>16 May 2017</td>
                    <td>
                      <span className="badge badge-success">Completed</span>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasicTables;
