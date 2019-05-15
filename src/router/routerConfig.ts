// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置
import Index from '../containers/index';
// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

interface Route {
  path: string;
  component: object;
  children?: object[];
}

class Route implements Route {
  path: string;
  component: object;
  children?: object[];
  constructor(path: string, component: object, children?: object[]) {
    this.path = path;
    this.component = component;
    this.children = children;
  }
}
const routerConfig: object[] = [
  new Route('/', Index)
];
export default routerConfig;
