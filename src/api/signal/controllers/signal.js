'use strict';

/**
 * signal controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::signal.signal');
