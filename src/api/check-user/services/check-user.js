'use strict';

/**
 * check-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::check-user.check-user');
