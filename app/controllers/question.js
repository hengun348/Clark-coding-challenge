import Ember from 'ember';

export default Ember.Controller.extend({
	questionnaireHelper: Ember.inject.service('questionnaire-helper'),	
	answer: [],
	isFreeTextType: null,
	isMultipleChoiceSingleAnswerType: null,
	isMultipleChoiceMultiAnswerType: null,
	isNotFirstQuestion: null,
	slideFromLeft: false,
	slideFromRight: false,

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
			this.set('slideFromRight', true);
			this.resetSlidingVariables();
			if(nextQuestion) {
				this.transitionToRoute('question', nextQuestion); //send in single question
			} else {
				this.transitionToRoute('finish'); //send in single question
			}
		},
		previousQuestion() {
			this.set('slideFromLeft', true);
			this.resetSlidingVariables();

			if(previousQuestion) {
				this.transitionToRoute('question', previousQuestion); //send in single question
			}
		}
	},
	resetSlidingVariables() {
		let that = this;
		Ember.run.later(function() {
			that.set('slideFromRight', false);
			that.set('slideFromLeft', false);
		}, 500);
	}
});
