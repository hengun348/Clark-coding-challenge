import { moduleFor, test } from 'ember-qunit';

moduleFor('service:questionnaire-helper', 'Unit | Service | questionnaire helper', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

//startAndReceiveFirstQuestionId
test('should return first question', function(assert) {});
test('should set correct properties based on questionnaire', function(assert) {});

//getNextQuestionId
test('should return correct id', function(assert) {});
test('if last question should return undefined', function(assert) {});
test('should increment current question index', function(assert) {});

//getPreviousQuestionId
test('should return correct id', function(assert) {});
test('if first question should return undefined', function(assert) {});
test('should decrement current question index', function(assert) {});
