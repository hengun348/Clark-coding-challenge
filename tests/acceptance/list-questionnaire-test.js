import { test } from 'qunit';
import moduleForAcceptance from 'clark-coding-challenge/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list questionnaire');

test('should list questionnaries.', function (assert) {
	visit('/');

	andThen(function() {
		assert.equal(find('.questionnaires-item').length, 3, 'should see 3 listings');
	});
});