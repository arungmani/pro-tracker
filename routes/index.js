const { Router: expressRouter } = require("express");
const router = expressRouter();

// auth routes
const authRouter = require("./authRoutes");
router.use("/auth", authRouter);

const projectRouter = require("./projectRoutes");
router.use("/project", projectRouter);

module.exports = router;