const users = require("./definition/user");
const { models } = require("./index");

module.exports = {
  getUser: async (userID, userName) => {
    try {
      console.log("in model get users");
      const user = await models.users.findOne({
        ...(userID
          ? { where: { userID: userID } }
          : { where: { userName: userName } }),
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  validateAndCreateModel: async (body) => {
    try {
      const user = await models.users.create({ ...body });

      console.log("in model ", user);
      if (user.error) {
        return {
          error: error,
        };
      }
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  //    getUser: async(userID, userName) => {
  //     try {
  //         console.log("in model get users");
  //         const user = await models.users.findOne({
  //             ...(userID ? {where : {userID: userID}}: {where: {userName: userName}}),
  //         })
  //         return {
  //             response: user
  //         }

  //        } catch(error){
  //         return{
  //             error: error
  //         }
  //        }
  //    },

  getAllUsers: async () => {
    try {
      const users = await models.users.findAll({
        include: {
          model: models.tasks,
          attributes: ["taskName", "taskDescription"],
        },
      });

      return {
        response: users,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  deleteUser: async (userId) => {
    try {
      console.log("in model", userId);
      const deleteUser = await models.users.destroy({
        where: { userID: userId },
      });
      return {
        response: deleteUser,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  updateUser: async ({ userId, ...body }) => {
    try {
      console.log("in model updateUser", userId);

      console.log("in body", body);
      const updateUser = await models.users.update(
        { ...body },
        { where: { userID: userId } }
      );

      return {
        response: updateUser,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
