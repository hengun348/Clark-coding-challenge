import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	questions: DS.hasMany('question'),
	numberOfQuestions: Ember.computed('questions', function() {
		return this.get('questions.length');
	})
});