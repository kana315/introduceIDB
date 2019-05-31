import Dexie from "dexie";

// Table
import { Introduce } from "./introduceTable";
import { Review } from "./reviewTable";
import { Achievement } from "./achieveTable";

export interface User {
  id?: number;
  name: string;
  joiningYear?: string;
  lang?: string;
  description?: string;
}

export interface Page {
  id?: number;
  title: string;
  subTitle: string;
}

// テーブル作成
class MyDB extends Dexie {
  user: Dexie.Table<User, number>;
  introduce: Dexie.Table<Introduce, number>;
  review: Dexie.Table<Review, number>;
  achievement: Dexie.Table<Achievement, number>;
  page: Dexie.Table<Page, number>;

  constructor(databaseName: string) {
    super(databaseName);
    this.version(1).stores({
      user: "++id, name, joiningYear, lang, description",
      introduce: "++id, userId, title, content",
      review: "++id, userId,  title, content, date, imageUrl",
      achievement: "++id, userId, title, date, imageUrl, description",
      page: "++id, title, subTitle"
    });

    // Table作成
    this.user = this.table("user");
    this.introduce = this.table("introduce");
    this.review = this.table("review");
    this.achievement = this.table("achievement");
    this.page = this.table("page");

    // 初期値の追加
    this.page.put({ id: 1, title: "Review", subTitle: "レビュー" });
    this.page.put({ id: 2, title: "Achievement", subTitle: "つくったもの" });

    this.user.put({
      id: 1,
      name: "Taguchi Kana",
      joiningYear: "2019年新卒",
      lang: "使用言語：Ruby、JavaScript、TypeScript",
      description:
        "プログラミングスクールではRuby on Rails、社内研修ではJavaScript、TypeScript、Reactを使ったフロントエンド開発を中心に学びました。Web開発に興味があり、独学からプログラミングを始めました。未経験ではありますが、積極的に勉強し、開発に関わっていきたいと思っております"
    });

    this.introduce.put({
      id: 1,
      userId: 1,
      title: "Introdude",
      subTitle: "自己紹介"
    });

    this.review.put({
      id: 1,
      userId: 1,
      title: "title1",
      content: "content2",
      date: "2019/1/1"
    });
    this.review.put({
      id: 2,
      userId: 1,
      title: "title2",
      content: "content2",
      date: "2019/1/1"
    });
    this.review.put({
      id: 3,
      userId: 1,
      title: "title3",
      content: "content3",
      date: "2019/1/1"
    });

    this.achievement.put({
      id: 1,
      userId: 1,
      title: "title1",
      date: "2019",
      description: "description1"
    });
    this.achievement.put({
      id: 2,
      userId: 1,
      title: "title2",
      date: "2019",
      description: "description2"
    });
    this.achievement.put({
      id: 3,
      userId: 1,
      title: "title3",
      date: "2019",
      description: "description3"
    });
  }
}

export default MyDB;
