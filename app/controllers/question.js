import Ember from 'ember';

export default Ember.Controller.extend({
	questionnaireHelper: Ember.inject.service('questionnaire-helper'),	
	answer: [],
	isFreeTextType: null,
	isMultipleChoiceSingleAnswerType: null,
	isMultipleChoiceMultiAnswerType: null,
	isNotFirstQuestion: null,

	init() {
		this.set('isFreeTextType', Ember.computed('model', function() {
			return this.get('model').type === 'freeText';
		}));

		this.set('isMultipleChoiceSingleAnswerType', Ember.computed('model', function() {
			return this.get('model').type === 'multipleChoicesSingleAnswer';
		}));

		this.set('isMultipleChoiceMultiAnswerType', Ember.computed('model', function() {
			return this.get('model').type === 'multipleChoicesMultiAnswer';
		}));

		this.set('isNotFirstQuestion', Ember.computed('model', function() {
			return this.get('questionnaireHelper').getCurrentQuestionIndex() !== 0;
		}));

		this.set('mandatoryAndNoAnswer', Ember.computed('answer', 'model', function() {
			return this.get('answer').length === 0 && this.get('model').mandatory;
		}));
	},

	actions: {
		nextQuestion() {
			const nextQuestion = this.get('questionnaireHelper').nextQuestion();
			this.set('answer', []);			

			if(nextQuestion) {
				this.transitionToRoute('question', nextQuestion); //send in single question
			} else {
				this.transitionToRoute('finish'); //send in single question
			}
		},
		previousQuestion() {
			const previousQuestion = this.get('questionnaireHelper').previousQuestion();
			this.set('answer', []);			

			if(previousQuestion) {
				this.transitionToRoute('question', previousQuestion); //send in single question
			}
		}
	}
});
