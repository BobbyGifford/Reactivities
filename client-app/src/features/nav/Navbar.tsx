import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

export const Navbar = () => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" />
          Reactivities
        </Menu.Item>
        <Menu.Item name="activities" />
        <Menu.Item>
          <Button positive content="Create Activity" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};
