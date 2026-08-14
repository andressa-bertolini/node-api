import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { PlacesController, PropertiesController } from "../controllers";

const router = Router();

router.get("/", (_, res) => {
  return res.status(StatusCodes.OK).json({
    name: "prime-estate-api",
    status: "ok",
  });
});

router.get("/api/properties", PropertiesController.getAll);
router.get("/api/properties/:id", PropertiesController.getById);
router.get("/api/places", PlacesController.getAll);

export { router };
