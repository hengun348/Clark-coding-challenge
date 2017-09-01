import Ember from 'ember';

export default Ember.Service.extend({
	currentQuestionnaire: null,
	currentQuestionIndex: null,
	questions: [],
	numberOfQuestions: null,

	startAndReceiveFirstQuestion(questionnaire) {
		this.set('currentQuestion', questionnaire.id);
		this.set('questions', questionnaire.get('questions'));
		this.set('currentQuestionIndex', 0);
		this.set('numberOfQuestions', questionnaire.get('questions.length'));

		return questionnaire.get('questions')[0];
	},
	getCurrentQuestionIndex() {
		return this.get('currentQuestionIndex');
	},
	nextQuestion() {
		if(this.get('currentQuestionIndex') === this.get('numberOfQuestions') - 1) {
			return;
		}

		this.incrementProperty('currentQuestionIndex');

		return this.get('questions')[this.get('currentQuestionIndex')];
	},
	previousQuestion() {
		if(this.get('currentQuestionIndex') === 0) {
			return;
		}

		this.decrementProperty('currentQuestionIndex');
		return this.get('questions')[this.get('currentQuestionIndex')];
	},
	lastQuestion() {
		return this.get('questions')[this.get('numberOfQuestions')-1];
	}
});
