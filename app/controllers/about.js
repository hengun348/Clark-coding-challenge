import Ember from 'ember';

export default Ember.Controller.extend({
	questionnaireHelper: Ember.inject.service('questionnaire-helper'),
	
	actions: {
		startQuestionnaire(questionnaire) {
			const firstQuestion = this.get('questionnaireHelper').startAndReceiveFirstQuestion(questionnaire);
			
			if(firstQuestion) {
				this.transitionToRoute('question', firstQuestion);
			} else {
				//Error
			}
		},
		backToQuestionnaires() {
			this.transitionToRoute('questionnaires');
		}
	}
});
