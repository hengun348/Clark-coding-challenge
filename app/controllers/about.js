import Ember from 'ember';

export default Ember.Controller.extend({
	questionnaireHelper: Ember.inject.service('helper'),
	
	actions: {
		startQuestionnaire(questionnaire) {
		},
		backToQuestionnaires() {
			this.transitionToRoute('questionnaires');
		}
	}
});
