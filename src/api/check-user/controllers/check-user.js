'use strict';

/**
 * check-user controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::check-user.check-user');
