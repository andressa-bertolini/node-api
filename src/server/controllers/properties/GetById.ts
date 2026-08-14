import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import { properties } from "../../data/properties";

export const getById: RequestHandler = (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: "Invalid property id" });
  }

  const property = properties.find((p) => p.id === id);

  if (!property) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: "Property not found" });
  }

  return res.status(StatusCodes.OK).json(property);
};
