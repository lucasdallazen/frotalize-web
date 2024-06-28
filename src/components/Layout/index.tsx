import { MenuDataItem, ProLayout } from "@ant-design/pro-components";
import { Outlet, useLocation } from "react-router-dom";


interface LayoutProps {
  menu: MenuDataItem[];
}


export function FrotalizeLayout(props: LayoutProps) {
  const { menu } = props;


  const { pathname } = useLocation()

  return (
    <ProLayout
      layout="mix"
      title={false}
      logo={<div></div>}
      route={{ children: menu }}
      location={{ pathname }}
      className="admin-panel-menu"
    >
      <Outlet />
    </ProLayout>
  )
}