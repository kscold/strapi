'use strict';

/**
 * cheer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cheer.cheer');
