import Ember from 'ember';

export default Ember.Controller.extend({
	questionnaireHelper: Ember.inject.service('questionnaire-helper'),	

	actions: {
		submitQuestionnaire() {
		},
		previousQuestion() {
			const previousQuestion = this.get('questionnaireHelper').lastQuestion();
			this.transitionToRoute('question', previousQuestion);
		}
	}
});
