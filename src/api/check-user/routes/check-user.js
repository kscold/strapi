'use strict';

/**
 * check-user router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::check-user.check-user');
