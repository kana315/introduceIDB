import Dexie from "dexie";
import { Introduce } from "./introduceTable";

export interface User {
  id?: number;
  name: string;
}

// export interface Page {
//   id?: number;
//   title: string;
//   subTitle: string;
// }

export interface Review {
  id?: number;
  title: string;
  subTitle: string;
}

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
      review: "++id, title, subTitle"
    });
    this.user = this.table("user");
    this.introduce = this.table("introduce");
    this.review = this.table("review");
  }

  // Userオブジェクトを追加
  userCreate(user: User) {
    this.user.put(user).then(res => console.log("CREATE", res));
  }

  findReview(title: string) {
    return this.review
      .where("title")
      .equals(title)
      .first();
  }
}

export default DemoDB;
