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
			const nextQuestionId = this.get('questionnaireHelper').getNextQuestionId();

			this.set('slideFromRight', true);
			this.resetSlidingVariables();

			if(nextQuestionId) {
				this.transitionToRoute('question', nextQuestionId);
			} else {
				this.transitionToRoute('finish');
			}
		},
		previousQuestion() {
			const previousQuestionId = this.get('questionnaireHelper').getPreviousQuestionId();
			
			this.set('slideFromLeft', true);
			this.resetSlidingVariables();

			if(previousQuestionId) {
				this.transitionToRoute('question', previousQuestionId);
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
