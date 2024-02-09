import express from "express";
import * as CharmsController from "../controllers/charms";

const router = express.Router();

router.get("/", CharmsController.getCharms);

router.get("/:slug", CharmsController.getCharm);

router.post("/", CharmsController.createCharm);

router.patch("/:charmId", CharmsController.updateCharm);

// router.delete("/:charmId", CharmsController.deleteCharm);

router.post("/updateAll", CharmsController.updateAllCharms);

router.post("/removeKeyValue", CharmsController.removeKeyValue);

export default router;
