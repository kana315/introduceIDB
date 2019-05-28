import Dexie from "dexie";

interface IUser {
  id?: number;
  name: string;
}

interface Introduce {
  id?: number;
  userId: number;
  title: string;
  content: string;
}

class DemoDB extends Dexie {
  introduce: Dexie.Table<Introduce, number>;
  user: Dexie.Table<User, number>;

  constructor(databaseName: string) {
    super(databaseName);
    this.version(1).stores({
      user: "++id, name",
      introduce: "++id, userId, title, content"
    });
    this.introduce = this.table("introduce");
    this.user = this.table("user");
  }

  getIntroduce() {
    const user = this.user;
  }

  // Introduceオブジェクトを追加
  create(introduce: Introduce) {
    this.introduce.put(introduce).then(res => console.log("CREATE", res));
  }

  // Userオブジェクトを追加
  userCreate(user: User) {
    this.user.put(user).then(res => console.log("CREATE", res));
  }

  // IDで検索
  find(keyId: number) {
    this.introduce.get(keyId, res => console.log(res));
  }

  // タイトル名から検索し、配列で返す
  findByTitle(title: string) {
    this.introduce
      .where("title")
      .equals(title)
      .toArray()
      .then(res => console.log(res));
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
