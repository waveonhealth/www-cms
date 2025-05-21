'use strict';

/**
 * registration-at-nda service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::registration-at-nda.registration-at-nda');
