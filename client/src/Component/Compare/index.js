import React, { useState, useEffect } from "react";
import PageLayout from "../../Layout/PageLayout";
import CompareForm from "./CompareForm";
import CompareChart from "./CompareChart";
import * as MarketApi from "../../Api/MarketApi";

const Compare = ({ location, history }) => {
  const pathName = location.pathname;
  const company1 = pathName.split("/")[2];
  const company2 = pathName.split("/")[3];
  const [compareData, setCompareData] = useState(null);
  const initial_CompanyForm = {
    company1,
    company2,
  };
  const [msg, setMsg] = useState("loading");
  const [companyForm, setcompanyForm] = useState(initial_CompanyForm);
  const currentStatus = "DAILY";

  useEffect(() => {
    if (company2 && company1) {
      fetchCompareData();
    }
  }, [companyForm]);

  const onChange = ({ target }) => {
    setcompanyForm({ ...companyForm, [target.name]: target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      company1 === companyForm.company1 &&
      company2 === companyForm.company2
    ) {
      return;
    }
    setCompareData(null);
    history.push(`/compare/${companyForm.company1}/${companyForm.company2}`);
  };
  const fetchCompareData = () => {
    setMsg("loading");
    MarketApi.compareChart(company1, company2, currentStatus)
      .then((data) => {
        setCompareData(data);
      })
      .catch((err) => {
        console.log(err.response);
        setCompareData(null);
        setMsg(err.response.data.msg);
      });
  };

  return (
    <PageLayout page="compare">
      <section className="dark min-vh-100 padTop-3">
        <div className="container">
          <CompareForm
            companyForm={companyForm}
            onChange={onChange}
            onSubmit={onSubmit}
          />
          {compareData ? (
            <CompareChart
              compareData={compareData}
              company2={company2}
              company1={company1}
            />
          ) : company1 && company2 ? (
            <h2>{msg}</h2>
          ) : (
            <></>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

Compare.propTypes = {};

export default Compare;
