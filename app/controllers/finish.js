import Ember from 'ember';

export default Ember.Controller.extend({
	questionnaireHelper: Ember.inject.service('questionnaire-helper'),	

	actions: {
		submitQuestionnaire() {
		},
		previousQuestion() {
			const lastQuestionId = this.get('questionnaireHelper').getLastQuestionId();

			if(lastQuestionId) {
				this.transitionToRoute('question', lastQuestionId);
			}
		}
	}
});
