import Ember from 'ember';

export default Ember.Service.extend({
	currentQuestionIndex: null,
	questions: null,
	numberOfQuestions: null,

	startAndReceiveFirstQuestionId(questionnaire) {
		const questions = questionnaire.get('questions').toArray();
		const firstQuestionId = questions[0].id;
		
		this.set('questions', questions);
		this.set('currentQuestionIndex', 0);
		this.set('numberOfQuestions', questions.length);

		return firstQuestionId;
	},
	getCurrentQuestionIndex() {
		return this.get('currentQuestionIndex');
	},
	getNextQuestionId() {
		let nextQuestionId,
			currentQuestionIndex = this.get('currentQuestionIndex');
		
		if(currentQuestionIndex === this.get('numberOfQuestions') - 1) {
			return;
		}

		currentQuestionIndex = this.incrementProperty('currentQuestionIndex');
		nextQuestionId = this.get('questions')[currentQuestionIndex].id;

		return nextQuestionId;
	},
	getPreviousQuestionId() {
		let previousQuestionId,
			currentQuestionIndex = this.get('currentQuestionIndex');
		
		if(!currentQuestionIndex > 0) {
			return;
		}
		
		currentQuestionIndex = this.decrementProperty('currentQuestionIndex');
		previousQuestionId = this.get('questions')[currentQuestionIndex].id;

		return previousQuestionId;
	},
	getLastQuestionId() {
		let lastQuestionId,
			questions = this.get('questions'),
			numberOfQuestions = this.get('numberOfQuestions');
		
		lastQuestionId = questions[numberOfQuestions - 1];
		
		return lastQuestionId;
	}
});
