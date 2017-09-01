import Ember from 'ember';

export default Ember.Controller.extend({
	answer: '',
	isNotFirstQuestion: null,

	init() {
		this.set('isNotFirstQuestion', Ember.computed('model', function() {
			return this.get('questionnaireHelper').getCurrentQuestionIndex() !== 0;
		}));
	},

	actions: {
		nextQuestion() {
			const nextQuestion = this.get('questionnaireHelper').nextQuestion();

			if(nextQuestion) {
				this.transitionToRoute('question', nextQuestion); //send in single question
			} else {
				//To show finish page
			}
		},
		previousQuestion() {
			const answer = this.get('answer');
			const multiAnswers = this.get('multiAnswers');			
			this.set('answer', null);
			this.set('multiAnswers', null);

			const previousQuestion = this.get('questionnaireHelper').previousQuestion();			

			if(previousQuestion) {
				this.transitionToRoute('question', previousQuestion); //send in single question
			} else {
				//To start page?
			}
		}
	}
});
