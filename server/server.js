const express = require("express");
const morgan = require("morgan");
const {
	getMakeup,
	getItem,
	getFragrance,
	getTools,
	getSkincare,
	getBath,
	getMen,
} = require("./handlers");

const {
	getMakeupId,
	getFragranceId,
	getToolsId,
	getSkincareId,
	getBathId,
	getMenId,
} = require("./itemHandler");

const app = express();
const server = require("http").createServer(app);

const PORT = 4000;

app
	.use(express.json())
	.use(morgan("dev"))

	.get("/makeup", getMakeup)
	.get("/fragrance", getFragrance)
	.get("/tools", getTools)
	.get("/skin", getSkincare)
	.get("/bath", getBath)
	.get("/men", getMen)
	// .get("/item/:_id", getItem)

	.get("/api/makeup/:productId", getMakeupId)
	.get("/api/fragrance/:productId", getFragranceId)
	.get("/api/tools/:productId", getToolsId)
	.get("/api/skin/:productId", getSkincareId)
	.get("/api/bath/:productId", getBathId)
	.get("/api/men/:productId", getMenId)

	.get("*", (req, res) => {
		res.status(404).json({
			status: 404,
			message: "oops",
		});
	});

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
