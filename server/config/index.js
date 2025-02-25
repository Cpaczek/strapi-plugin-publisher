'use strict';

const { pluginConfigSchema } = require('./schema');

module.exports = {
	default: () => ({
		actions: {
			syncFrequency: '*/1 * * * *',
		},
		components: {
			dateTimePicker: {
				step: 1,
			},
		},
	}),
	validator: async (config) => {
		await pluginConfigSchema.validate(config);
	},
};
