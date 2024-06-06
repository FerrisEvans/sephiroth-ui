import {BrowserRouterProps, RouteObject} from "react-router-dom";
import React from "react";

/**
 * json path key RouteObject路由类型
 */
export interface IPathKeyRouteObject {
  [path: string]: RouteObject
}

/**
 * 面包屑类型
 */
export interface BreadcrumbType {
  // 标题。路由在菜单、浏览器或面包屑中展示的文字
  title: string
  // 路由地址或外链
  path: string
}

/**
 * tab导航存储规则类型
 */
export type TabNavType = 'path' | 'querypath'

/**
 * meta自定义
 */
export interface IRouteMeta {
  title?: string
  hidden?: boolean
  icon?: string
  roles?: string[]
  /**
   * 面包屑自定义内容：
   *     1、默认不配置按照路由自动读取；
   *     2、设置为 false , 按照路由自动读取并不读当前自己；
   *     3、配置对应的面包屑格式如下：
   */
  breadcrumb?: BreadcrumbType[] | false
  /**
   * 左侧菜单选中，如果设置路径，侧栏将突出显示你设置的路径对应的侧栏导航
   *   1、（默认 route.path），此参数是为了满足特殊页面特殊需求，
   *   2、如：详情页等选中侧栏导航或在模块A下面的页面，想选模块B为导航选中状态
   */
  selectLeftMenu?: string;
  /**
   * 所有父元素的path,下标key按照父元素的顺序
   */
  parentPath?: string[]

  /**
   * 设置tab导航存储规则类型
   *    1、默认不配置按照path(route.path)规则
   *    2、querypath：path + query (route.path+route.query) 规则
   */
  tabNavType?: TabNavType
  /**
   * 设置该字段，则在关闭当前tab页时，作为关闭前的钩子函数
   * @param close 关闭回调函数
   */
  tabNavCloseBefore?: (close: () => void) => void
}

export type RouteComponent = React.FC<BrowserRouterProps> | (() => any);

/**
 * 路由类型
 */
export interface IRouter {
  path: string;
  meta?: IRouteMeta;
  redirect?: string;
  component?: RouteComponent;
  children?: IRouter[];
}

/**
 * json path key 路由类型
 */
export interface IPathKeyRouter {
  [path: string]: IRouter;
}

/**
 * 路由类型 IRouter 与 json path key 路由类型 集合
 */
export interface IRouterPathKeyRouter {
  router: IRouter[];
  pathKeyRouter: IPathKeyRouter;
}

/**
 * tab导航类型
 */
export interface TabNavItem {
  location: Location;
  menu: IRouter;
}