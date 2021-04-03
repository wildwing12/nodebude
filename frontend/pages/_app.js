import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import Head from "next/head";
import wrapper from "../store/configureStore";

const nodeBird = ({ Component }) => {
  //next.js에서는 Provider가 내장되어 있기 때문에 할필요가 없다.
  //참고로 Provider는 react-redux기능이다.
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};
nodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default wrapper.withRedux(nodeBird);
