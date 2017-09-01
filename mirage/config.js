export default function() {
	this.namespace = '/api';

	let questionnaires = [
		{
			type: 'questionnaire',
			id: 1,
			attributes: {
				title: 'Politics and you',
				description: 'Questions about your views on politics and politicians',
				questions: [
					{
						id: 1,
						description: 'Who is your favourite politician?',
						type: 'freeText',
						mandatory: true
					},
					{
						id: 2,
						description: 'Politicians are:',
						type: 'multipleChoicesSingleAnswer',
						mandatory: false,
						options: ['Cute', 'Heroes', 'Kind of nice', 'Boring']
					},
					{
						id: 3,
						description: 'If you were a politician you would be:',
						type: 'multipleChoicesMultiAnswer',
						mandatory: false,
						options: ['Great', 'Kind', 'Angry', 'Stressed', 'Cautious']
					}
				]
			}
		},
		{
			type: 'questionnaire',
			id: 2,
			attributes: {
				title: 'Your traveling habits',
				description: 'Questions about your traveling habits',
				questions: [
					{
						id: 4,
						description: 'What was the name of the last country you visited?',
						type: 'freeText',
						mandatory: false
					},
					{
						id: 5,
						description: 'Worst thing with traveling are:',
						type: 'multipleChoicesSingleAnswer',
						mandatory: false,
						options: ['Other tourists', 'The actual traveling', 'The natives', 'All of the above']
					},
					{
						id: 6,
						description: 'If you had the change would you move permanently to another country?',
						type: 'multipleChoicesSingleAnswer',
						mandatory: false,
						options: ['Yes', 'No']
					}
				]
			}
		},
		{
			type: 'questionnaire',
			id: 3,
			attributes: {
				title: 'Fish and diet',
				description: 'Your relationship to this sea creature',
				questions: [
					{
						id: 7,
						description: 'How often do you not eat fish?',
						type: 'multipleChoicesSingleAnswer',
						mandatory: false,
						options: ['Every day', 'Every week', 'Every year', 'Never']
					},
					{
						id: 8,
						description: 'Fish is:',
						type: 'multipleChoicesSingleAnswer',
						mandatory: true,
						options: ['Tasty', 'Not tasty']
					}
				]
			}
		}
	];
	
	this.get('/questionnaires', function() {
		return { data: questionnaires };
	});
}