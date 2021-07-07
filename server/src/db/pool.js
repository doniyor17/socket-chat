const { Pool } = require('pg');
const conf = {
	database: process.env.DB_NAME,
	user: process.env.USER,
	password: process.env.PASSWORD,
	host: process.env.HOST,
	port: 5432,
};
const pool = new Pool({
	conf,
});

const fetch = async (SQL, ...params) => {
	const client = await pool.connect();
	try {
		const {
			rows: [row],
		} = await client.query(SQL, params.length ? params : null);
		return row;
	} finally {
		client.release();
	}
};

const fetchAll = async (SQL, ...params) => {
	const client = await pool.connect();
	try {
		const { rows } = await client.query(SQL, params.length ? params : null);
		return rows;
	} finally {
		client.release();
	}
};

module.exports = {
	fetch,
	fetchAll,
};
