import Dexie from "dexie";

// Table型定義
import { Introduce } from "./introduceTable";
import { Review } from "./reviewTable";

export interface User {
  id?: number;
  name: string;
}

// export interface Page {
//   id?: number;
//   title: string;
//   subTitle: string;
// }

// テーブル作成
class DemoDB extends Dexie {
  user: Dexie.Table<User, number>;
  introduce: Dexie.Table<Introduce, number>;
  review: Dexie.Table<Review, number>;

  constructor(databaseName: string) {
    super(databaseName);
    this.version(1).stores({
      user: "++id, name",
      introduce: "++id, userId, title, content",
      review: "++id, title, content"
    });
    this.user = this.table("user");
    this.introduce = this.table("introduce");
    this.review = this.table("review");
  }
}

export default DemoDB;
