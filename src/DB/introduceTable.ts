import Dexie from "dexie";

export interface Introduce {
  id?: number;
  userId?: number;
  title: string;
  subTitle: string;
  name?: string;
  joiningYear?: string;
  lang?: string;
  description?: string;
}

// Introduceオブジェクトを追加
async function create(table: Dexie.Table<any, number>, object: object) {
  await table.put(object);
}

// タイトル名からIntroduce検索し、配列で返す
async function find(table: Dexie.Table<any, number>, title: string) {
  const records = await table
    .where("title")
    .equals(title)
    .first();
  return { ...records };
}

// 異なるデータが与えられたら更新
function update(table: Dexie.Table<any, number>, id: number, object: object) {
  table
    .update(id, object)
    .then(res =>
      res ? console.log("UPDATE", id) : console.log("NO UPDATE", id)
    );
}

// // レコードを削除
// function delete(table, keyId: number) {
//   table
//     .where({ id: keyId })
//     .delete()
//     .then(res =>
//       res ? console.log("DELITE", res) : console.log("NO DELITE", res)
//     );
// }

export default { create, find, update };
