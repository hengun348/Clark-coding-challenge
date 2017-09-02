import Ember from 'ember';

export default Ember.Controller.extend({
	questionnaireHelper: Ember.inject.service('questionnaire-helper'),
	
	actions: {
		startQuestionnaire(questionnaire) {
			const firstQuestionId = this.get('questionnaireHelper').startAndReceiveFirstQuestionId(questionnaire);
			
			if(firstQuestionId) {
				this.transitionToRoute('question', firstQuestionId);
			}
		},
		backToQuestionnaires() {
			this.transitionToRoute('questionnaires');
		}
	}
});
