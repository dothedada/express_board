import { newPool } from './pool.cjs';

const allMessages_query = async () => {
    const { rows } = await newPool.query(
        'SELECT * FROM messages ORDER BY date DESC',
    );
    return rows;
};

const messageById_query = async (id) => {
    const { rows } = await newPool.query(
        'SELECT * FROM messages WHERE id = $1',
        [id],
    );

    return rows;
};

const addMessage_query = async ({ text, user, added }) => {
    console.log(text, user, added);
    const query = await newPool.query(
        'INSERT INTO messages (msg, username, date) VALUES ($1, $2, $3) RETURNING *',
        [text, user, added],
    );

    return query;
};

const deleteMessage_query = async (id) => {
    await newPool.query('DELETE FROM messages WHERE id = $1', [id]);
};

export {
    allMessages_query,
    messageById_query,
    addMessage_query,
    deleteMessage_query,
};
