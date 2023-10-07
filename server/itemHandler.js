const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const getMakeupId = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);
	const productId = req.params.productId;
	console.log("id here", productId);

	try {
		await client.connect();
		const db = client.db("sephora");
		const query = { productId: productId };

		const result = await db.collection("makeup").findOne(query);

		if (result !== null) {
			res.status(200).json({
				status: 200,
				data: result,
				message: "Item details retrieved successfully.",
			});
		} else {
			res.status(404).json({
				status: 404,
				message: "item not found",
			});
		}
	} catch (error) {
		console.error("Error fetching item data:", error);
		res.status(500).json({
			status: 500,
			message: "An error occurred while fetching item data.",
		});
	} finally {
		client.close();
	}
};

const getFragranceId = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);
	const productId = req.params.productId;

	try {
		await client.connect();
		const db = client.db("sephora");
		const query = { productId: productId };

		const result = await db.collection("fragrance").findOne(query);

		if (result !== null) {
			res.status(200).json({
				status: 200,
				data: result,
				message: "Item details retrieved successfully.",
			});
		} else {
			res.status(404).json({
				status: 404,
				message: "item not foundd",
			});
		}
	} catch (error) {
		console.error("Error fetching item data:", error);
		res.status(500).json({
			status: 500,
			message: "An error occurred while fetching item data.",
		});
	} finally {
		client.close();
	}
};

const getToolsId = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);
	const productId = req.params.productId;

	try {
		await client.connect();
		const db = client.db("sephora");
		const query = { productId: productId };

		const result = await db.collection("tools").findOne(query);

		if (result !== null) {
			res.status(200).json({
				status: 200,
				data: result,
				message: "Item details retrieved successfully.",
			});
		} else {
			res.status(404).json({
				status: 404,
				message: "item not foundd",
			});
		}
	} catch (error) {
		console.error("Error fetching item data:", error);
		res.status(500).json({
			status: 500,
			message: "An error occurred while fetching item data.",
		});
	} finally {
		client.close();
	}
};

const getSkincareId = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);
	const productId = req.params.productId;

	try {
		await client.connect();
		const db = client.db("sephora");
		const query = { productId: productId };

		const result = await db.collection("skincare").findOne(query);

		if (result !== null) {
			res.status(200).json({
				status: 200,
				data: result,
				message: "Item details retrieved successfully.",
			});
		} else {
			res.status(404).json({
				status: 404,
				message: "item not foundd",
			});
		}
	} catch (error) {
		console.error("Error fetching item data:", error);
		res.status(500).json({
			status: 500,
			message: "An error occurred while fetching item data.",
		});
	} finally {
		client.close();
	}
};

const getBathId = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);
	const productId = req.params.productId;

	try {
		await client.connect();
		const db = client.db("sephora");
		const query = { productId: productId };

		const result = await db.collection("bath").findOne(query);

		if (result !== null) {
			res.status(200).json({
				status: 200,
				data: result,
				message: "Item details retrieved successfully.",
			});
		} else {
			res.status(404).json({
				status: 404,
				message: "item not foundd",
			});
		}
	} catch (error) {
		console.error("Error fetching item data:", error);
		res.status(500).json({
			status: 500,
			message: "An error occurred while fetching item data.",
		});
	} finally {
		client.close();
	}
};

const getMenId = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);
	const productId = req.params.productId;

	try {
		await client.connect();
		const db = client.db("sephora");
		const query = { productId: productId };

		const result = await db.collection("men").findOne(query);

		if (result !== null) {
			res.status(200).json({
				status: 200,
				data: result,
				message: "Item details retrieved successfully.",
			});
		} else {
			res.status(404).json({
				status: 404,
				message: "item not foundd",
			});
		}
	} catch (error) {
		console.error("Error fetching item data:", error);
		res.status(500).json({
			status: 500,
			message: "An error occurred while fetching item data.",
		});
	} finally {
		client.close();
	}
};

module.exports = {
	getMakeupId,
	getFragranceId,
	getToolsId,
	getSkincareId,
	getBathId,
	getMenId,
};
