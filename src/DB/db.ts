import Dexie from "dexie";
import IntroduceTable from "./introduceTable";

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

class DemoDB extends Dexie {
  introduce: IntroduceTable;
  user: Dexie.Table<User, number>;
  review: Dexie.Table<Review, number>;

  constructor(databaseName: string) {
    super(databaseName);
    this.version(1).stores({
      user: "++id, name",
      introduce: "++id, userId, title, content",
      review: "++id, title, subTitle"
    });
    this.introduce = new IntroduceTable(this);
    this.user = this.table("user");
    this.review = this.table("review");
  }

  // Userオブジェクトを追加
  userCreate(user: User) {
    this.user.put(user).then(res => console.log("CREATE", res));
  }

  // タイトル名からIntroduce検索し、配列で返す
  async asyncFindIntroduce(title: string) {
    const records = await this.introduce
      .where("title")
      .equals(title)
      .first();

    return { ...records, isOpen: false };
  }

  findReview(title: string) {
    return this.review
      .where("title")
      .equals(title)
      .first();
  }

  // 異なるデータが与えられたら更新
  update(id: number, object: object) {
    this.introduce
      .update(id, object)
      .then(res =>
        res ? console.log("UPDATE", id) : console.log("NO UPDATE", id)
      );
  }

  // レコードを削除
  deleteRecord(keyId: number) {
    // this.introduce.delete(keyId);
    this.introduce
      .where({ id: keyId })
      .delete()
      .then(res =>
        res ? console.log("DELITE", res) : console.log("NO DELITE", res)
      );
  }
}

export default DemoDB;
