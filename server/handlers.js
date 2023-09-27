const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const getMakeup = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		const db = client.db("sephora");

		const result = await db.collection("makeup").find().toArray();

		if (result) {
			res.status(200).json({ status: 200, data: result, message: "All items" });
		} else {
			res.status(404).json({ status: 404, message: "No Item found" });
		}
	} catch (error) {
		console.log(error);
	} finally {
		client.close();
	}
};

const getFragrance = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		const db = client.db("sephora");

		const result = await db.collection("fragrance").find().toArray();

		if (result) {
			res.status(200).json({ status: 200, data: result, message: "All items" });
		} else {
			res.status(404).json({ status: 404, message: "No Item found" });
		}
	} catch (error) {
		console.log(error);
	} finally {
		client.close();
	}
};

const getBath = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		const db = client.db("sephora");

		const result = await db.collection("bath").find().toArray();

		if (result) {
			res.status(200).json({ status: 200, data: result, message: "All items" });
		} else {
			res.status(404).json({ status: 404, message: "No Item found" });
		}
	} catch (error) {
		console.log(error);
	} finally {
		client.close();
	}
};

const getMen = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		const db = client.db("sephora");

		const result = await db.collection("men").find().toArray();

		if (result) {
			res.status(200).json({ status: 200, data: result, message: "All items" });
		} else {
			res.status(404).json({ status: 404, message: "No Item found" });
		}
	} catch (error) {
		console.log(error);
	} finally {
		client.close();
	}
};

const getSkincare = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		const db = client.db("sephora");

		const result = await db.collection("skincare").find().toArray();

		if (result) {
			res.status(200).json({ status: 200, data: result, message: "All items" });
		} else {
			res.status(404).json({ status: 404, message: "No Item found" });
		}
	} catch (error) {
		console.log(error);
	} finally {
		client.close();
	}
};

const getTools = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		const db = client.db("sephora");

		const result = await db.collection("tools").find().toArray();

		if (result) {
			res.status(200).json({ status: 200, data: result, message: "All items" });
		} else {
			res.status(404).json({ status: 404, message: "No Item found" });
		}
	} catch (error) {
		console.log(error);
	} finally {
		client.close();
	}
};

module.exports = {
	getMakeup,
	getFragrance,
	getTools,
	getSkincare,
	getBath,
	getMen,
};
