import Dexie from "dexie";
import { Achieve } from "../components/Achievement";

export type Achievement = {
  id?: number;
  userId: number;
  title: string;
  date: string;
  imageUrl?: string;
  description: string;
};

// レコード追加
async function create(table: Dexie.Table<any, number>, object: object) {
  await table.put(object);
  table.toCollection().toArray();
}

// idからレコード検索
function find(table: Dexie.Table<any, number>, id: number) {
  return table.get(id, res => res);
}

// AchievePage
async function createPage(
  pageTable: Dexie.Table<any, number>,
  achieveTable: Dexie.Table<any, number>
): Dexie.Promise<Achieve> {
  const page = await pageTable.get(2, res => res);
  const achievements = await achieveTable.toCollection().toArray();
  return { ...page, achievements };
}

export default { create, find, createPage };
