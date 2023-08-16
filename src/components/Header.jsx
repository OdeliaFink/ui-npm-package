import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styled from 'styled-components';
import { Input } from './Input';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const HeaderContainer = styled.nav`
  height: 2rem;
  padding: 1rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: 1rem;
`;

const LoggedInText = styled.span`
  font-family: Arial;
  font-weight: 100;
  padding-right: 1rem;
  font-size: 0.7rem;
`;

const HiContainer = styled.div`
  text-align: center;
`;

const MainContainer = styled.div`
  background: linear-gradient(
    52deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(245, 149, 27, 0.8702074579831933) 50%,
    rgba(255, 147, 0, 1) 100%
  );
`;

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  pageLink,
}) => (
  <MainContainer>
    <HeaderContainer>
      <Container>
        <div>
          <h2>Logo</h2>
        </div>
        <div>
          <Input
            size="xl"
            inFocusBorderColor="orange"
            label="find your next deal..."
          />
        </div>
        <div>
          {user ? (
            <>
              <LoggedInText>
                welcome, <b>{user.name}</b>!
              </LoggedInText>
              <Button
                size="small"
                onClick={onLogout}
                label="Log out"
                backgroundColor="#BCAB79"
                hoverBgColor="#FA7E61"
              />
            </>
          ) : (
            <>
              <Button
                size="small"
                onClick={onLogin}
                label="Log in"
                backgroundColor="#BCAB79"
                hoverBgColor="#FA7E61"
              />
              <Button
                primary
                size="small"
                onClick={onCreateAccount}
                label="Sign up"
                backgroundColor="#BCAB79"
                hoverBgColor="#FA7E61"
              />
            </>
          )}
        </div>
      </Container>
    </HeaderContainer>
    <HiContainer>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact component={pageLink} />
          <Route path="/about" component={pageLink} />
          <Route path="/contact" component={pageLink} />
        </Routes>
      </Router>
    </HiContainer>
  </MainContainer>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  pageLink: PropTypes.string,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
