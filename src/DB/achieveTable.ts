import Dexie from "dexie";
import { AchievePage } from "../components/Achievement";
import { Page } from "./db";

export type Achievement = {
  id?: number;
  userId: number;
  title: string;
  date: string;
  imageUrl?: string;
  description: string;
};

// レコード追加、IDを返す
async function create(
  table: Dexie.Table<Achievement, number>,
  object: Achievement
): Promise<number> {
  const newRecordID = await table.put(object);
  return newRecordID;
}

// idからレコード検索
function find(table: Dexie.Table<Achievement, number>, id: number) {
  const res = table.get(id);
  if (typeof res === "undefined") {
    throw new Error("undifined");
  }
  return res;
}

// Achieve一覧ページ
async function createPage(
  pageTable: Dexie.Table<Page, number>,
  achieveTable: Dexie.Table<Achievement, number>
): Dexie.Promise<AchievePage> {
  const page = await pageTable.get(2, res => res);
  const achievements = await achieveTable.toCollection().toArray();
  return { ...page, achievements } as AchievePage;
}

export default { create, find, createPage };
