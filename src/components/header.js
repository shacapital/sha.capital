import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Logo from '../components/logo';

const HeaderContainer = styled.div`
  text-align: center;
  padding: 1.5em;

  ${Logo} {
    width: 40%;
  }

  .navigation {
    margin: 0;

    li {
      display: inline-block;
      margin: 1em;
    }

    a {
      text-decoration: none;
      color: ${props => props.theme.colors.navigationLinkColor};
      text-transform: lowercase;
      font-family: ${props => props.theme.typography.fontFamily};
      letter-spacing: 0.15em;
      padding: 0.25em 0.5em;

      &.active {
        border-bottom: 1px solid ${props => props.theme.colors.navy};
        color: ${props => props.theme.colors.navy};
      }

      &:hover {
        border-bottom: 1px solid ${props => props.theme.colors.navy};
        color: ${props => props.theme.colors.navy};
      }
    }
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Logo />
    <ul className="navigation">
      <li><Link to="/about" activeClassName="active">About</Link></li>
      <li><Link to="/products" activeClassName="active">Products</Link></li>
      <li><Link to="/contact" activeClassName="active">Contact</Link></li>
    </ul>
  </HeaderContainer>
);

export default Header;
