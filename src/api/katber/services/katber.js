'use strict';

/**
 * katber service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::katber.katber');
