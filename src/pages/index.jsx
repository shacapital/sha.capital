import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Logo from '../components/Logo';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  font-family: helvetica;
  text-align: center;
  font-size: 0.8em;
  font-family: 'Open Sans', sans-serif;

  p {
    padding: 0.75em 0;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Logo style={{ fontSize: '2rem' }} />

      <p>
        sha.capital, L.P. is a research and investment firm with a quantitative
        and systematic long volatility focus, seeking to transform market
        turbulence into opportunity.
      </p>

      <p>
        <a href="mailto:info@sha.capital">Contact us</a>
      </p>
    </Wrapper>
  </Layout>
);

export default IndexPage;
