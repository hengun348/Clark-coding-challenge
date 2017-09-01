import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
	location: config.locationType,
	rootURL: config.rootURL
});

Router.map(function() {
	this.route('questionnaires');
	this.route('about', { path: '/questionnaires/:questionnaire_id/about' });
	this.route('question', { path: '/questionnaires/question/:question_id' });
});

export default Router;
