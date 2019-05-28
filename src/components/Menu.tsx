import React from "react";
import useReactRouter from "use-react-router";
import { Menu, Icon } from "semantic-ui-react";

const TopMenu: React.FC = () => {
  const { history } = useReactRouter();
  return (
    <>
      <Menu inverted>
        <Menu.Item onClick={() => history.push("/")}>
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item onClick={() => history.push("/achievements")}>
          <Icon name="folder outline" />
          Achievements
        </Menu.Item>
        <Menu.Item onClick={() => history.push("/reviews")}>
          <Icon name="book" />
          Reviews
        </Menu.Item>
      </Menu>
    </>
  );
};

export default TopMenu;
