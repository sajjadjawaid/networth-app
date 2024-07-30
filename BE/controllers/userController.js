const joi = require("joi");
const validationService = require("../services/usersServices");

const createUserSchema = joi.object().keys({
  userName: joi.string().alphanum().required(),
  password: joi.string().required(),
  phone: joi.string().required(),
});

const deleteUserSchema = joi.object().keys({
  userId: joi.string().required(), // to delete using multiple userID use joi.array().single() instead of .string()
});

const updateUserSchema = joi.object().keys({
  userId: joi.string().required(),
  userName: joi.string(),
});

module.exports = {
  validateAndCreate: async (req, res) => {
    try {
      const validation = await createUserSchema.validateAsync(req.body);
      const user = await validationService.deletePassword(validation);
      console.log("in controller", user);
      if (user.error) {
        return res.send({
          error: user.error,
        });
      }
      return res.send({
        response: {
          message: "user is validated",
          response: user.response,
        },
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await validationService.getAllUsers();
      if (users.error) {
        return res.send({
          error: users.error,
        });
      }

      return res.send({
        response: users.response,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },

  deleteUser: async (req, res) => {
    try {
      console.log("in controller delete user");
      const validate = await deleteUserSchema.validateAsync(req.query);
      console.log("query body: ", validate.userId);
      const deleteUser = await validationService.deleteUser(validate.userId);
      console.log("after deleteuser");
      if (deleteUser.error) {
        return res.send({
          error: deleteUser.error,
        });
      }
      return res.send({
        response: deleteUser.response,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },

  updateUser: async (req, res) => {
    try {
      console.log("in controller update user");
      const validate = await updateUserSchema.validateAsync(req.body);
      console.log("query body: ", validate.userId);
      const updateUser = await validationService.updateUser(validate);
      console.log("after updateUser");
      if (updateUser.error) {
        return res.send({
          error: updateUser.error,
        });
      }
      return res.send({
        response: updateUser.response,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
