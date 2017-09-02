import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		const question = this.store.peekRecord('question', params.question_id);
		
			if(!question) {
				this.transitionTo('questionnaires');
			}
		
		return question;
	}
});
