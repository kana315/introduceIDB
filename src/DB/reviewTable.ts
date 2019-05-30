import Dexie from "dexie";
import { ReviewPage } from "../components/Review";

export interface Page {
  id?: number;
  title: string;
  subTitle: string;
}

// レコード追加
async function create(table: Dexie.Table<any, number>, object: object) {
  await table.put(object);
}

// タイトル名から検索し、配列で返す
async function find(table: Dexie.Table<any, number>, title: string) {
  const records = await table
    .where("title")
    .equals(title)
    .first();
  return { ...records };
}

// ReviewPage
async function createPage(
  pageTable: Dexie.Table<any, number>,
  childTable: Dexie.Table<any, number>
): Dexie.Promise<ReviewPage> {
  const page = await pageTable.get(1, res => res);
  const reviews = await childTable
    .where("pageId")
    .equals(1)
    .toArray();
  return { ...page, reviews };
}

// 異なるデータが与えられたら更新
function update(table: Dexie.Table<any, number>, id: number, object: object) {
  table
    .update(id, object)
    .then(res => console.log(res ? "UPDATE" : "NO UPDATE", id));
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

export default { create, find, createPage, update };
