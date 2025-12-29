import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Dashboard = () => {
  const barChartRef = useRef(null);
  const doughnutChartRef = useRef(null);
  const barChartInstance = useRef(null);
  const doughnutChartInstance = useRef(null);

  useEffect(() => {
    // Destroy existing charts if they exist
    if (barChartInstance.current) {
      barChartInstance.current.destroy();
    }
    if (doughnutChartInstance.current) {
      doughnutChartInstance.current.destroy();
    }

    // Bar Chart - Visit and Sales Statistics
    if (barChartRef.current) {
      const ctx = barChartRef.current.getContext("2d");
      barChartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG"],
          datasets: [
            {
              label: "CHN",
              data: [50, 120, 40, 100, 60, 120, 50, 100],
              backgroundColor: "#b66dff",
              borderRadius: 5,
            },
            {
              label: "USA",
              data: [80, 160, 70, 130, 100, 150, 90, 70],
              backgroundColor: "#1bcfb4",
              borderRadius: 5,
            },
            {
              label: "UK",
              data: [40, 60, 30, 80, 40, 60, 50, 30],
              backgroundColor: "#fe7c96",
              borderRadius: 5,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: true,
              position: "top",
              labels: {
                usePointStyle: true,
                padding: 20,
              },
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                borderDash: [3, 3],
              },
              beginAtZero: true,
            },
          },
        },
      });
    }

    // Doughnut Chart - Traffic Sources
    if (doughnutChartRef.current) {
      const ctx2 = doughnutChartRef.current.getContext("2d");
      doughnutChartInstance.current = new Chart(ctx2, {
        type: "doughnut",
        data: {
          labels: ["Search Engines", "Direct Click", "Bookmarks Click"],
          datasets: [
            {
              data: [30, 30, 40],
              backgroundColor: ["#6a5acd", "#1bcfb4", "#fe7c96"],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          cutout: "70%",
          plugins: {
            legend: {
              display: true,
              position: "bottom",
              labels: {
                usePointStyle: true,
                padding: 20,
              },
            },
          },
        },
      });
    }

    // Cleanup on unmount
    return () => {
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }
      if (doughnutChartInstance.current) {
        doughnutChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white me-2">
            <i className="mdi mdi-home"></i>
          </span>
          Dashboard
        </h3>

        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              Overview{" "}
              <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
            </li>
          </ul>
        </nav>
      </div>

      {/* TOP CARDS */}
      <div className="row">
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-danger card-img-holder text-white">
            <div className="card-body">
              <img
                src="/admin-assets/images/dashboard/circle.svg"
                className="card-img-absolute"
                alt="circle"
              />
              <h4 className="mb-3">
                Weekly Sales
                <i className="mdi mdi-chart-line mdi-24px float-end"></i>
              </h4>
              <h2 className="mb-5">$ 15,0000</h2>
              <h6 className="card-text">Increased by 60%</h6>
            </div>
          </div>
        </div>

        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-info card-img-holder text-white">
            <div className="card-body">
              <img
                src="/admin-assets/images/dashboard/circle.svg"
                className="card-img-absolute"
                alt="circle"
              />
              <h4 className="mb-3">
                Weekly Orders
                <i className="mdi mdi-bookmark-outline mdi-24px float-end"></i>
              </h4>
              <h2 className="mb-5">45,6334</h2>
              <h6 className="card-text">Decreased by 10%</h6>
            </div>
          </div>
        </div>

        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-success card-img-holder text-white">
            <div className="card-body">
              <img
                src="/admin-assets/images/dashboard/circle.svg"
                className="card-img-absolute"
                alt="circle"
              />
              <h4 className="mb-3">
                Visitors Online
                <i className="mdi mdi-diamond mdi-24px float-end"></i>
              </h4>
              <h2 className="mb-5">95,5741</h2>
              <h6 className="card-text">Increased by 5%</h6>
            </div>
          </div>
        </div>
      </div>

      {/* CHARTS */}
      <div className="row">
        <div className="col-md-7 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Visit And Sales Statistics</h4>
              <canvas ref={barChartRef} id="visit-sale-chart" className="mt-4"></canvas>
            </div>
          </div>
        </div>

        <div className="col-md-5 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Traffic Sources</h4>
              <div className="doughnutjs-wrapper d-flex justify-content-center">
                <canvas ref={doughnutChartRef} id="traffic-chart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Recent Tickets</h4>

              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Assignee</th>
                      <th>Subject</th>
                      <th>Status</th>
                      <th>Last Update</th>
                      <th>Tracking ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="/admin-assets/images/faces/face1.jpg"
                          className="me-2"
                          alt="face"
                        />
                        David Grey
                      </td>
                      <td>Fund is not received</td>
                      <td>
                        <label className="badge badge-gradient-success">
                          DONE
                        </label>
                      </td>
                      <td>Dec 5, 2017</td>
                      <td>WD-12345</td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/admin-assets/images/faces/face2.jpg"
                          className="me-2"
                          alt="face"
                        />
                        Stella Johnson
                      </td>
                      <td>High loading time</td>
                      <td>
                        <label className="badge badge-gradient-warning">
                          PROGRESS
                        </label>
                      </td>
                      <td>Dec 12, 2017</td>
                      <td>WD-12346</td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/admin-assets/images/faces/face3.jpg"
                          className="me-2"
                          alt="face"
                        />
                        Marina Michel
                      </td>
                      <td>Website down for one week</td>
                      <td>
                        <label className="badge badge-gradient-info">
                          ON HOLD
                        </label>
                      </td>
                      <td>Dec 16, 2017</td>
                      <td>WD-12347</td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/admin-assets/images/faces/face4.jpg"
                          className="me-2"
                          alt="face"
                        />
                        John Doe
                      </td>
                      <td>Loosing control on server</td>
                      <td>
                        <label className="badge badge-gradient-danger">
                          REJECTED
                        </label>
                      </td>
                      <td>Dec 3, 2017</td>
                      <td>WD-12348</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
