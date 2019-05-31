import Dexie from "dexie";
import { IntroducePage } from "../components/Home";

export interface Introduce {
  id?: number;
  userId?: number;
  title: string;
  subTitle: string;
}

// Introduceオブジェクトを追加
async function create(table: Dexie.Table<any, number>, object: object) {
  await table.put(object);
}

// Userに紐付いたIntroducePageオブジェクトを返す
async function createIntroducePage(
  introduceTable: Dexie.Table<any, number>,
  userTable: Dexie.Table<any, number>
): Dexie.Promise<IntroducePage> {
  const page = await introduceTable.get(1, res => res);
  const userIntroduce = await userTable
    .where("id")
    .equals(1)
    .first();
  return { ...page, ...userIntroduce };
}

export default { create, createIntroducePage };
