'use strict';

/**
 * routine-todo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::routine-todo.routine-todo');
