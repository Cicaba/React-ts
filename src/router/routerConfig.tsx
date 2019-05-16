// 菜单配置
// headerMenuConfig：头部导航配置
import * as React from 'react';
import Bundle from '../bundle';
// asideMenuConfig：侧边导航配置
let Index = (props: any) => (
  <Bundle load={() => import('../containers/index')}>
    {(Component: React.ElementType) => <Component {...props} />}
  </Bundle>
);
let Login = (props: any) => (
  <Bundle load={() => import('../containers/login')}>
    {(Component: React.ElementType) => <Component {...props} />}
  </Bundle>
);
// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

interface Route {
  path: string;
  component: React.ElementType;
  children?: object[];
}

class Route implements Route {
  path: string;
  component: React.ElementType;
  children?: object[];
  constructor(path: string, component: React.ElementType, children?: object[]) {
    this.path = path;
    this.component = component;
    this.children = children;
  }
}
const routerConfig: object[] = [
  new Route('/', Index),
  new Route('/Login', Login),
];
export default routerConfig;
