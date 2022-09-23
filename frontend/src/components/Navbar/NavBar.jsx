import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiSettings, FiCalendar, FiClipboard } from 'react-icons/fi';

const Container = styled.nav`
  min-width: 100%;
  height: 50px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.colors.primary};
  z-index: 999;
`;

const Tabs = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  gap: 140px;
`;

const Tab = styled.li`
  margin: 0;
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    margin: 0;
  }
`;

const TabLink = styled(Link)`
  color: #fff;
  padding: 10px;
  text-decoration: none;
  font-weight: 500;
`;

const BookIcon = styled(FiClipboard)`
  font-size: 1.5rem;
`;

const CalendarIcon = styled(FiCalendar)`
  font-size: 1.5rem;
`;

const SettingsIcon = styled(FiSettings)`
  font-size: 1.5rem;
`;

function NavBar() {
  return (
    <Container>
      <Tabs>
        <Tab>
          <TabLink to="/">
            <BookIcon />
          </TabLink>
        </Tab>
        <Tab>
          <TabLink to="/calendar">
            <CalendarIcon />
          </TabLink>
        </Tab>
        <Tab>
          <TabLink to="/settings">
            <SettingsIcon />
          </TabLink>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default NavBar;
