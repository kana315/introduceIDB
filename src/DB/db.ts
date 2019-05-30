import Dexie from "dexie";

// Table
import { User, Introduce, Review, Page } from "./table";

// テーブル作成
class MyDB extends Dexie {
  user: Dexie.Table<User, number>;
  introduce: Dexie.Table<Introduce, number>;
  review: Dexie.Table<Review, number>;
  page: Dexie.Table<Page, number>;

  constructor(databaseName: string) {
    super(databaseName);
    this.version(1).stores({
      user: "++id, name",
      introduce: "++id, userId, title, content",
      review: "++id, pageId,  title, content",
      page: "++id, title, subTitle"
    });
    this.user = this.table("user");
    this.introduce = this.table("introduce");
    this.review = this.table("review");
    this.page = this.table("page");
    this.page.put({ id: 1, title: "Review", subTitle: "レビュー" });
    this.review.put({ id: 1, pageId: 1, title: "title", content: "content" });
    this.introduce.put({ id: 1, title: "Introdude", subTitle: "introduce" });
  }
}

export default MyDB;
