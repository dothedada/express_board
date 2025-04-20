import { newPool } from './pool.cjs';

const getMessages = async () => {
    const { rows } = await newPool.query(
        'SELECT * FROM messages ORDER BY date DESC',
    );
    return rows;
};

const getMessageById = async (id) => {
    const { rows } = await newPool.query(
        'SELECT * FROM messages WHERE id = $1',
        [id],
    );

    return rows;
};

const addMessage = async ({ msg, username }) => {
    await newPool.query(
        'INSERT INTO messages (msg, username, date) VALUES ($1, $2, $3)',
        [msg, username, new Date()],
    );
};

const deleteMessage = async (id) => {
    await newPool.query('DELETE FROM messages WHERE id = $1', [id]);
};

export { getMessages, getMessageById, addMessage, deleteMessage };
