import Ember from 'ember';

export default Ember.Controller.extend({
	questionnaireHelper: Ember.inject.service('questionnaire-helper'),
	answersSubmitted: false,

	actions: {
		submitAnswers() {
			const answers = this.store.peekAll('answer');
			let that = this;

			answers.save().then(function() {
				that.set('answersSubmitted', true);
				answers.map(answer => answer.deleteRecord());
			})
			.catch(this.showErrorMessage);
		},
		previousQuestion() {
			const lastQuestionId = this.get('questionnaireHelper').getLastQuestionId();

			if(lastQuestionId) {
				this.transitionToRoute('question', lastQuestionId);
			}
		},
		backToQuestionnaires() {
			this.transitionToRoute('questionnaires');
		}
	},
	showErrorMessage(){
		alert('Sorry and error occured try to save again');
	}
});
