import React from "react";
import PageLayout from "../../Layout/PageLayout";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
export default function Home() {
  return (
    <PageLayout page="home">
      <section className="jumbotron min-vh-100">
        <div className="container pt-5 text-center text-white fw-bold ">
          <div className="py-3 rounded mx-auto showcase-bg w-75">
            <h3 className>Having trouble finding the right stocks? Try</h3>
            <span className="fs-2 text-white">STOCKSTALK</span>
          </div>
        </div>
      </section>
      <section className="about my-5 pt-5">
        <div className="container text-center">
          <h1 className="mb-3">Realtime Analysis</h1>
          <p className="w-50 m-auto">
            StockStalk provides real time data to compare and analyze stocks.
          </p>
          <br></br>
          <Link to="/faqs">
            <Button className="simple">See More</Button>
          </Link>
        </div>
      </section>

      <section className="stats my-5 py-5">
        <div className="container d-flex justify-content-around align-items-center flex-wrap">
          <div className="box">
            <i className="fas fa-building fa-3x my-2"></i>
            <h2 className="fw-bold">5,000+</h2>
            <p className="text-primary fs-4">Company Stocks</p>
          </div>
          <div className="box">
            <i className="fas fa-users fa-3x my-2"></i>
            <h2 className="fw-bold">1,000+</h2>
            <p className="text-primary fs-4">Users</p>
          </div>
          <div className="box">
            <i className="fas fa-chart-line fa-3x my-2"></i>
            <h2 className="fw-bold">6+</h2>
            <p className="text-primary fs-4">Visual Analysis</p>
          </div>
          {/* <div className="box">
            <i className="fas fa-piggy-bank fa-3x my-2"></i>
            <h2 className="fw-bold">10,000+</h2>
            <p className="text-primary fs-4">Money Saved</p>
          </div> */}
        </div>
      </section>
    </PageLayout>
  );
}
