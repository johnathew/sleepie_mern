import express from "express";
import * as CharmsController from "../controllers/charms";

const router = express.Router();

router.get("/", CharmsController.getCharms);

router.get("/:charmId", CharmsController.getCharm);

router.post("/", CharmsController.createCharm);

router.patch("/:charmId", CharmsController.updateNote);

router.delete("/:charmId",  )

export default router;
