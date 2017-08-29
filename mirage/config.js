export default function() {
	this.namespace = '/api';

	this.get('/questionnaires', function() {
		return {
			data: [{
				type: 'questionnaire',
				id: 1,
				attributes: {
					title: 'Politics and you',
					description: 'Questions about your views on politics and politicians',
					questions: []
				}
			},
			{
				type: 'questionnaire',
				id: 2,
				attributes: {
					title: 'Your traveling habits',
					description: 'Questions about your traveling habits',
					questions: []
				}
			},
			{
				type: 'questionnaire',
				id: 3,
				attributes: {
					title: 'Fish and diet',
					description: 'You relationship to this sea creature',
					questions: []
				}
			}]
		};
	});
}