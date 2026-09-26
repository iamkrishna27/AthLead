import { Router } from "express";
import {
  createEvent,
  deleteEvent,
  findAllEvent,
  getMyEvents,
  registerEvent,
  updateEvent,
} from "../controllers/eventController.js";
import { requireAdmin, requireAuth } from "../middleware/middleware.js";

const router = Router();

//User event routes
router.get("/events", findAllEvent);

router.get(
  "/my-events",
  requireAuth,
  getMyEvents,
);

router.post(
  "/events/:eventId/register",
  requireAuth,
  registerEvent,
);

//Admin event routes
router.post(
  "/events",
  requireAuth,
  requireAdmin,
  createEvent,
);

router.delete(
  "/events/:eventId",
  requireAuth,
  requireAdmin,
  deleteEvent,
);

router.patch(
  "/events/:eventId",
  requireAuth,
  requireAdmin,
  updateEvent,
);

export default router;
