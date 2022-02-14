import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/welcome">
        <NavLink to="/welcome">Welcome</NavLink>
      </Menu.Item>

      <Menu.Item key="/mint">
        <NavLink to="/mint">🧙‍♂️ Mint</NavLink>
      </Menu.Item>

      <Menu.Item key="/my-own">
        <NavLink to="/my-own">🖼 My Own</NavLink>
      </Menu.Item>

      <Menu.Item key="/claim-dno">
        <NavLink to="/claim-dno">🙋‍♂️ Claim DNO</NavLink>
      </Menu.Item>

      <Menu.Item key="/nft-contract">
        <NavLink to="/nft-contract">📄 Debug NFTs</NavLink>
      </Menu.Item>

      <Menu.Item key="/dno-contract">
        <NavLink to="/dno-contract">📄 Debug DNO</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
