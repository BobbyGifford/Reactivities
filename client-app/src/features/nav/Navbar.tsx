import React from "react";
import { Menu, Container, Button, Responsive } from "semantic-ui-react";

export const Navbar = () => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" />
          Reactivities
        </Menu.Item>
        <Menu.Item name="activities" />
        <Responsive as={Menu.Item} {...Responsive.onlyComputer}>
          <Button positive content="Create Activity" />
        </Responsive>
      </Container>
    </Menu>
  );
};
