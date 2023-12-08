import "./App.css";
import { List } from "./components/List";
import news from "./components/data/news.json";
import headerMenu from "./components/data/headerMenuList.json";
import rates from "./components/data/rate.json";
import article from "./components/data/article.json";
import searchTags from "./components/data/searchTags.json";
import { Form } from "./components/Form";
import weather from "./components/data/weather.json";
import topical from "./components/data/topical.json";
import schedules from "./components/data/schedules.json";
import tvprogram from "./components/data/tvprogram.json";

export default function App() {
  const newsItems = news;
  const headerMenuList = headerMenu;
  const rateItems = rates;
  const randomArticle = article;
  const tags = searchTags;
  const weatherItem = weather;
  const topicalItem = topical;
  const schedulesItem = schedules;
  const tvprogramItem = tvprogram;
  return (
    <div className="contaiter">
      <header className="header">
        <div className="header-item-left">
          <List items={headerMenuList} title="menu" header="" />
          <List items={newsItems} title="news" header="" />
          <List items={rateItems} title="rate" header="" />
        </div>
        <article className="header-item-right">
          <List items={randomArticle} title="randomArticle" header="" />
        </article>
      </header>
      <main className="main">
        <div className="logo"></div>
        <div className="search">
          <List items={tags} title="search-tags" header="" />
          <Form title="searchForm" />
          <span>Найдётся всё. Например, </span>
          <a className="searchLink" href="https://www.calend.ru/moon/">
            фаза луны сегодня
          </a>
        </div>
      </main>
      <aside className="banner"></aside>
      <footer className="footer">
        <List items={weatherItem} title="weather" header="Погода" />
        <List items={topicalItem} title="topical" header="Посещаемое" />
        <List items={schedulesItem} title="schedules" header="Расписания" />
        <List items={tvprogramItem} title="TVProgram" header="Телепрограмма" />
      </footer>
    </div>
  );
}
