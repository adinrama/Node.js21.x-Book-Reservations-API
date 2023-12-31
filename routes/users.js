const Joi = require("joi");
const { getAllUsers, login, register } = require("../handlers/users");

const routes = [
  {
    method: "GET",
    path: "/v1/users",
    options: {
      handler: getAllUsers,
      description: "Endpoint for get all users data",
      notes: "Execute to see the result",
      tags: ["api", "users"],
    },
  },
  {
    method: "POST",
    path: "/v1/users/login",
    options: {
      handler: login,
      description: "Endpoint for user login",
      notes: "Enter the email and password to login",
      tags: ["api", "users"],
      plugins: {
        "hapi-swagger": {
          payloadType: "form",
        },
      },
      validate: {
        payload: Joi.object({
          email: Joi.string().email().required(),
          password: Joi.string().required(),
        }),
      },
    },
  },
  {
    method: "POST",
    path: "/v1/users/register",
    options: {
      handler: register,
      description: "Endpoint for user register",
      notes:
        "Fill in the attributes of name, email, password, gender, roles, and address",
      tags: ["api", "users"],
      plugins: {
        "hapi-swagger": {
          payloadType: "form",
        },
      },
      validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          email: Joi.string().email().required(),
          password: Joi.string().required(),
          gender: Joi.string().required(),
          roles: Joi.string().required(),
          address: Joi.string().required(),
        }),
      },
    },
  },
];

module.exports = routes;
