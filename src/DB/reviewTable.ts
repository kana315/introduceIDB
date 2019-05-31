import Dexie from "dexie";
import { ReviewPage } from "../components/Review";

export interface Review {
  id?: number;
  userId?: number;
  title: string;
  content: string;
  imageUrl?: string;
  date: string;
}

// レコード追加
async function create(table: Dexie.Table<any, number>, object: object) {
  await table.put(object);
}

// idからレコード検索
function find(table: Dexie.Table<any, number>, id: number) {
  return table.get(id, res => res);
}

// ReviewPageを生成する
async function createPage(
  pageTable: Dexie.Table<any, number>,
  reviewTable: Dexie.Table<any, number>
): Dexie.Promise<ReviewPage> {
  const page = await pageTable.get(1, res => res);
  const reviews = await reviewTable.toCollection().toArray();
  return { ...page, reviews };
}

export default { create, find, createPage };
