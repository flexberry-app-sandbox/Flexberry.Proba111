import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba11-организация', 'Unit | Model | i-i-s-proba11-организация', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proba11-должности',
    'model:i-i-s-proba11-организация',
    'model:i-i-s-proba11-планир-собес',
    'model:i-i-s-proba11-рег-результ',
    'model:i-i-s-proba11-регист-анкеты',
    'model:i-i-s-proba11-сотрудники',
    'model:i-i-s-proba11-т-ч-регист-анкеты',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
