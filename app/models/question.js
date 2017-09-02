import DS from 'ember-data';

export default DS.Model.extend({
	type: DS.attr('string'),
	mandatory: DS.attr('boolean', { defaultValue: false }),
	description: DS.attr('string'),
	questionnaire: DS.belongsTo('questionnaire', { inverse: 'questions' }),
	options: DS.attr()
});
