import { RequestHandler } from "express";
import CharmModel from "../models/charm";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import slugify from "slugify";

export const getCharms: RequestHandler = async (req, res, next) => {
  try {
    const charms = await CharmModel.find().exec();
    res.status(200).json(charms); // http status = ok, turns json from backend to send to frontend
  } catch (error) {
    next(error);
  }
};

export const getCharm: RequestHandler = async (req, res, next) => {
  const slug = req.params.slug

  try {
    const charm = await CharmModel.findOne({ slug: slug }).exec();

    if (!charm) {
      throw createHttpError(404, "Charm not found");
    }
    res.status(200).json(charm);
  } catch (error) {
    next(error);
  }
};

interface CreateCharmBody {
  type?: string;
  desc?: string;
  price?: number;
  name?: string;
  imgURL?: string;
}

export const createCharm: RequestHandler<
  unknown,
  unknown,
  CreateCharmBody,
  unknown
> = async (req, res, next) => {
  const { name, price, desc, type, imgURL } = req.body;

  try {
    if (!type) {
      throw createHttpError(400, "Charm must have a type");
    }

    if (!name) {
      throw createHttpError(400, "Charm must have a name");
    }

    if (!price) {
      throw createHttpError(400, "Charm must have a price");
    }

    if (!imgURL) {
      throw createHttpError(400, "Charm must have an image");
    }

    const newCharm = await CharmModel.create({
      type: type,
      desc: desc,
      name: name,
      price: price,
      imgUrl: imgURL,
    });
    // 201 = new resource generated
    res.status(201).json(newCharm);
  } catch (error) {
    next(error);
  }
};

interface UpdateCharmParams {
  charmId: string;
}

interface UpdateCharmBody {
  type?: string;
  desc?: string;
  price?: number;
  name?: string;
  imgURL?: string;
  slug?: string;
}

interface UpdateAllCharmBody {
  slug: string;
}

export const updateAllCharms: RequestHandler<
  unknown,
  unknown,
  UpdateAllCharmBody,
  unknown
> = async (req, res, next) => {
  const { slug } = req.body;
  try {
    await CharmModel.updateMany({}, { $set: { slug: slug } });
    res.status(200).json({ message: "All charms updated" });
  } catch (error) {
    next(error);
  }
};

interface RemoveKeyValueBody {
  key: string;
}

export const removeKeyValue: RequestHandler<
  unknown,
  unknown,
  RemoveKeyValueBody,
  unknown
> = async (req, res, next) => {
  try {
    await CharmModel.updateMany({}, { $unset: { slug: 1 } });
    res.status(200).json({ message: "Key removed from all charms" });
  } catch (error) {
    next(error);
  }
};

export const updateCharm: RequestHandler<
  UpdateCharmParams,
  unknown,
  UpdateCharmBody,
  unknown
> = async (req, res, next) => {
  const charmId = req.params.charmId;
  const newType = req.body.type;
  const newDesc = req.body.desc;
  const newName = req.body.name;

  const slug = slugify(newName!, { lower: true });

  const newPrice = req.body.price;

  try {
    if (!mongoose.isValidObjectId(charmId)) {
      throw createHttpError(400, "Invalid charm ID");
    }

    if (!newType) {
      throw createHttpError(400, "Charm must have a type");
    }

    if (!newName) {
      throw createHttpError(400, "Charm must have a name");
    }

    if (!newPrice) {
      throw createHttpError(400, "Charm must have a price");
    }

    const charm = await CharmModel.findById(charmId).exec();

    if (!charm) {
      throw createHttpError(404, "Charm not found");
    }

    charm.name = newName;
    charm.price = newPrice;
    charm.type = newType;
    charm.desc = newDesc;
    charm.slug = slug;

    const updatedCharm = await charm.save();

    res.status(200).json(updatedCharm);
  } catch (error) {
    next(error);
  }
};

export const deleteNote: RequestHandler = async (req, res, next) => {
  const charmId = req.params.charmId;

  try {
    if (!mongoose.isValidObjectId(charmId)) {
      throw createHttpError(400, "Invalid charm ID");
    }

    const charm = await CharmModel.findById(charmId).exec();

    if (!charm) {
      throw createHttpError(404, "charm not found :(");
    }

    await charm.deleteOne();

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
