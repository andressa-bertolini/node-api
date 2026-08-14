import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import { properties } from "../../data/properties";

export const getAll: RequestHandler = (req, res) => {
  const query = typeof req.query.query === "string" ? req.query.query : undefined;
  const purpose = typeof req.query.purpose === "string" ? req.query.purpose : undefined;
  const type = typeof req.query.type === "string" ? req.query.type : undefined;
  const priceMinParam = typeof req.query.priceMin === "string" ? req.query.priceMin : undefined;
  const priceMaxParam = typeof req.query.priceMax === "string" ? req.query.priceMax : undefined;

  const priceMin = priceMinParam ? Number(priceMinParam) : null;
  const priceMax = priceMaxParam ? Number(priceMaxParam) : null;

  let filtered = [...properties];

  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.state.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q)
    );
  }

  if (purpose) {
    filtered = filtered.filter((p) => p.purpose === purpose);
  }

  if (type) {
    filtered = filtered.filter((p) => p.type === type);
  }

  if (priceMin !== null && !Number.isNaN(priceMin)) {
    filtered = filtered.filter((p) => p.price >= priceMin);
  }

  if (priceMax !== null && !Number.isNaN(priceMax)) {
    filtered = filtered.filter((p) => p.price <= priceMax);
  }

  return res.status(StatusCodes.OK).json(filtered);
};
