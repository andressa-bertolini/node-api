import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import { places } from "../../data/places";

export const getAll: RequestHandler = (req, res) => {
  const limitParam = typeof req.query.limit === "string" ? req.query.limit : undefined;
  const state = typeof req.query.state === "string" ? req.query.state : undefined;
  const limit = limitParam ? Number(limitParam) : null;

  let result = [...places];

  if (state) {
    result = result.filter((place) => place.state === state);
  }

  if (limit !== null && !Number.isNaN(limit) && limit > 0) {
    result = result.slice(0, limit);
  }

  return res.status(StatusCodes.OK).json(result);
};
