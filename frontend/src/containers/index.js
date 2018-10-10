import React, { Fragment } from "react";
import Loadable from "react-loadable";
import LinearProgressCustom from "../commons/LinearProgressCustom/LinearProgressCustom";

const LoadableHome = Loadable({
  loader: () => import("./Home" /* webpackChunkName: 'home' */),
  loading: LinearProgressCustom
});

const LoadableHeroes = Loadable({
  loader: () => import("./Heroes" /* webpackChunkName: 'heroes' */),
  loading: LinearProgressCustom
});

const LoadableAppBar = Loadable({
  loader: () =>
    import("../commons/SearchAppBar" /* webpackChunkName: 'appBar' */),
  loading: LinearProgressCustom
});

const Containers = () => (
  <Fragment>
    <header>
      <LoadableAppBar />
    </header>
    <main>
      <LoadableHome />
      <LoadableHeroes />
    </main>
    <footer>
      <small>
        <a href="http://marvel.com">Data provided by Marvel. © 2018 MARVEL</a>
      </small>
    </footer>
  </Fragment>
);

export default Containers;
