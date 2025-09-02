import { createBrowserRouter, redirect } from "react-router-dom";
// import { lazy } from "react";
import LayoutIndex from "@/views/Layout";
import ErrorPage from "@/components/ErrorPage";
import HomePage from "@/views/Home";
import ArticlePage from "@/views/Article";
import ArticleContext from "@/views/ArticleContext";
import CalendarPage from "@/views/Calender";
import Statistics from "@/views/Statistics";
import Sponsorship from "@/views/Sponsorship";
import About from "@/views/About";
export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/index"), // 根路径重定向
  },
  {
    path: "/index",
    Component: LayoutIndex,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "article",
        Component: ArticlePage,
      },
      {
        path: "article/:id?",
        Component: ArticleContext,
      },
      {
        path: "calender",
        Component: CalendarPage,
      },
      {
        path: "statistics",
        Component: Statistics,
      },
      {
        path: "sponsorship",
        Component: Sponsorship,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
  {
    path: "/product",
    children: [
      {
        path: "PAI",
        element: <div>这里是产品 PAI 页面</div>,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
