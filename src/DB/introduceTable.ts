export interface Introduce {
  id?: number;
  userId: number;
  title: string;
  subTitle: string;
  name?: string;
  joiningYear?: string;
  lang?: string;
  description?: string;
}

class IntroduceTable {
  table: any;
  constructor(db: DemoDB) {
    this.table = db.table("introduce");
  }

  // Introduceオブジェクトを追加
  create(introduce: Introduce) {
    this.table.put(introduce);
  }

  // タイトル名からIntroduce検索し、配列で返す
  findIntroduce(title: string) {
    return this.table
      .where("title")
      .equals(title)
      .first();
  }
}

export default IntroduceTable;
