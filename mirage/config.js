export default function() {
	this.namespace = '/api';

	let questionnaires = {
		"data": [
			{
				"attributes": {
					"title": "Politics and you",
					"description": "Questions about your views on politics and politicians"
				},
				"id": "1",
				"relationships": {
					"questions": {
						"data": [
							{ "id": "1", "type": "questions"},
							{ "id": "2", "type": "questions"},
							{ "id": "3", "type": "questions"}
						]
					}
				},
				"type": "questionnaires"
			},
			{
				"attributes": {
					"title": "Your traveling habits",
					"description": "Questions about your traveling habits"
				},
				"id": "2",
				"relationships": {
					"questions": {
						"data": [
							{ "id": "4", "type": "questions"},
							{ "id": "5", "type": "questions"},
							{ "id": "6", "type": "questions"}
						]
					}
				},
				"type": "questionnaires"
			},
			{
				"attributes": {
					"title": "Fish and diet",
					"description": "Your relationship to this sea creature"
				},
				"id": "3",
				"relationships": {
					"questions": {
						"data": [
							{ "id": "7", "type": "questions"},
							{ "id": "8", "type": "questions"},
						]
					}
				},
				"type": "questionnaires"
			}
		],
		"included": [
			{
				"attributes": {
					"description": "Who is your favourite politician?",
					"mandatory": true,
					"type": "freeText"
				},
				"id": "1",
				"relationships": {
					"questionnaire": {
						"data": {
							"id": "1",
							"type": "questionnaires"
						}
					}
				},
				"type": "question"
			},
			{
				"attributes": {
					"description": "Politicians are:",
					"mandatory": true,
					"type": "multipleChoicesSingleAnswer",
					"options": ["Cute", "Heroes", "Kind of nice", "Boring"]
				},
				"id": "2",
				"relationships": {
					"questionnaire": {
						"data": {
							"id": "1",
							"type": "questionnaires"
						}
					}
				},
				"type": "question"
			},
			{
				"attributes": {
					"description": "If you were a politician you would be:",
					"mandatory": false,
					"type": "multipleChoicesMultiAnswer",
					"options": ['Great', 'Kind', 'Angry', 'Stressed', 'Cautious']
				},
				"id": "3",
				"relationships": {
					"questionnaire": {
						"data": {
							"id": "1",
							"type": "questionnaires"
						}
					}
				},
				"type": "question"
			},
			{
				"attributes": {
					"description": "What was the name of the last country you visited?",
					"mandatory": false,
					"type": "freeText"
				},
				"id": "4",
				"relationships": {
					"questionnaire": {
						"data": {
							"id": "2",
							"type": "questionnaires"
						}
					}
				},
				"type": "question"
			},
			{
				"attributes": {
					"description": "Worst thing with traveling are:",
					"mandatory": false,
					"type": "multipleChoicesSingleAnswer",
					"options": ["Other tourists", "The actual traveling", "The natives", "All of the above"]
				},
				"id": "5",
				"relationships": {
					"questionnaire": {
						"data": {
							"id": "2",
							"type": "questionnaires"
						}
					}
				},
				"type": "question"
			},
			{
				"attributes": {
					"description": "If you had the change would you move permanently to another country?",
					"mandatory": false,
					"type": "multipleChoicesSingleAnswer",
					"options": ["Yes", "No"]
				},
				"id": "6",
				"relationships": {
					"questionnaire": {
						"data": {
							"id": "2",
							"type": "questionnaires"
						}
					}
				},
				"type": "question"
			},
			{
				"attributes": {
					"description": "How often do you not eat fish?",
					"mandatory": false,
					"type": "multipleChoicesSingleAnswer",
					"options": ["Every day", "Every week", "Every year", "Never"]
				},
				"id": "7",
				"relationships": {
					"questionnaire": {
						"data": {
							"id": "3",
							"type": "questionnaires"
						}
					}
				},
				"type": "question"
			},
			{
				"attributes": {
					"description": "Fish is:",
					"mandatory": false,
					"type": "multipleChoicesSingleAnswer",
					"options": ["Tasty", "Not tasty"]
				},
				"id": "8",
				"relationships": {
					"questionnaire": {
						"data": {
							"id": "3",
							"type": "questionnaires"
						}
					}
				},
				"type": "question"
			}
		]
	};
	
	this.get('/questionnaires', function() {
		return questionnaires;
	});

	this.post('/answers');
}