import { NextApiRequest, NextApiResponse } from "next";

import mongoose from "mongoose";

import { db } from "@/database";
import { Entry, IEntry } from "@/models";

type Data =
  | {
      message: string;
    }
  | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid ID " + id });
  }

  switch (req.method) {
    case "PUT":
      return updateEntry(req, res);

    default:
      res.status(200).json({ message: "No endpoint" });
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();
  const entryToUpdate = await Entry.findById(id).lean().exec();
  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(400).json({ message: "Non-existent id" });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status },
      { runValidators: true, new: true }
    )
      .lean()
      .exec();

    res.status(200).json(updatedEntry!);
    await db.disconnect();
  } catch (error: any) {
    console.log(error);
    await db.disconnect();
    res.status(400).json({ message: error.errors.status.message });
  }
};