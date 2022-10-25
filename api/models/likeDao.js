const { appDataSource } = require("./appDataSource");

const checkLike = async (userId, productId) => {
  const result = appDataSource.query(`
    SELECT
        id
    FROM likes
    WHERE user_id = ? and product_id = ?;
    `, [userId, productId]
  );

  return result;
};

const deleteLike = async (userId, productId) => {
  const result = await appDataSource.query(`
    DELETE FROM likes 
    WHERE user_id = ? and product_id = ?
    `, [userId, productId]
  );

  return result;
};

const putLike = async (userId, productId) => {
  const result = await appDataSource.query(`
    INSERT INTO likes (
        user_id,
        product_id
    ) VALUES (?, ?)
    `, [userId, productId]
  );

  return result;
};

const getUserLikes = async (userId) => {
  const result = await appDataSource.query(`
    SELECT 
      JSON_ARRAYAGG(
        JSON_OBJECT(
          "productId", p.id,
          "productName", p.name,
          "price", p.price
        )
      ) AS productInfo
    FROM likes lk
    JOIN products p on p.id = lk.product_id
    JOIN sub_categories sc ON sc.id = p.sub_category_id
    WHERE lk.user_id = ?;
    `, [userId]
  );

  return result;
};

module.exports = {
  checkLike,
  deleteLike,
  putLike,
  getUserLikes,
};
