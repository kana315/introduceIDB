import Dexie from "dexie";
import { ReviewPage } from "../components/Review";
import { Page } from "./db";

export interface Review {
  id?: number;
  userId?: number;
  title: string;
  content: string;
  imageUrl?: string;
  date: string;
}

// レコード追加
async function create(table: Dexie.Table<Review, number>, object: Review) {
  try {
    return await table.add(object);
  } catch (err) {
    console.error(err);
  }
}

// idからレコード検索
async function find(table: Dexie.Table<Review, number>, id: number) {
  const res = await table.get(id);
  if (!res) {
    throw new Error("Not find records");
  }
  return res;
}

// ReviewPageを生成する
async function createPage(
  pageTable: Dexie.Table<Page, number>,
  reviewTable: Dexie.Table<Review, number>
): Dexie.Promise<ReviewPage> {
  const page = await pageTable.get(1, res => res);
  const reviews = await reviewTable.toCollection().toArray();
  return { ...page, reviews } as ReviewPage;
}

export default { create, find, createPage };
