'use strict';

/**
 * page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page.page', ({ strapi }) => ({
    async findOne(ctx) {
        const { Path } = ctx.params;
        const entity = await strapi.db.query('api::page.page').findOne({
            populate: true,
            where: { Path }
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    }
}));
