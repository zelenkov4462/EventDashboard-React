import React, { FC } from "react";
import { Breadcrumb, Layout, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { useDispatch } from "react-redux";
import { useActions } from "../hooks/useActions";
const { Header } = Layout;

const Navbar: FC = () => {
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logout } = useActions();

  const exit = () => {
    // @ts-ignore
    // dispatch(AuthActionCreators.logout());
    logout();
  };

  return (
    <Header>
      <div className="logo" />
      {isAuth ? (
        <Row justify={"end"}>
          <div style={{ color: "white", paddingRight: "10px" }}>
            {user.username}
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={new Array(1).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `Выйти`,
                onClick: () => exit(),
              };
            })}
          />
        </Row>
      ) : (
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(1).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `Логин`,
              onClick: () => navigate(RouteNames.LOGIN),
            };
          })}
        />
      )}
    </Header>
  );
};

export default Navbar;
