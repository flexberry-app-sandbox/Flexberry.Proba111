import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba11-организация', 'Unit | Serializer | i-i-s-proba11-организация', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proba11-организация',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proba11-итог-собес',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
