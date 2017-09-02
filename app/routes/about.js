import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		const questionnaire = this.store.peekRecord('questionnaire', params.questionnaire_id);

		if(!questionnaire) {
			this.transitionTo('questionnaires');
		}

		return questionnaire;
	}
});
