import express from "express";
import * as CharmsController from "../controllers/charms";

const router = express.Router();

router.get("/", CharmsController.getCharms);

router.get("/bracelets/:slug", CharmsController.getCharm);

router.get("/bracelets", CharmsController.getCharmsOfType);

router.get("/necklaces", CharmsController.getCharmsOfType);

router.get("/necklaces/:slug", CharmsController.getCharm);

router.get("/bookmarks", CharmsController.getCharmsOfType);

router.get("/bookmarks/:slug", CharmsController.getCharms);

router.get("/keychains", CharmsController.getCharmsOfType);

router.get("/keychains/:slug", CharmsController.getCharm);

router.post("/", CharmsController.createCharm);

router.patch("/:charmId", CharmsController.updateCharm);

// router.delete("/:charmId", CharmsController.deleteCharm);

router.post("/updateAll", CharmsController.updateAllCharms);

router.post("/removeKeyValue", CharmsController.removeKeyValue);

export default router;
