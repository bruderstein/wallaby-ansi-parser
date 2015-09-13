var Unexpected = require('unexpected');

var expect = Unexpected.clone();

describe('real errors', function () {

    it('swallows the line breaks', function () {

        var result = {
            important: 1,
            alsoImportant: [
                {id: 124},
                {id: 124}
            ]
        };

        // Note how the text 'to satisfy' immediately follows the '}'
        // expected { important: 1, alsoImportant: [ { id: 124 }, { id: 124 } ] }to satisfy { important: 1, alsoImportant: [ { id: 123 }, { id: 124 } ] }
        //                                                                       ^ here is a line break
        expect(result, 'to satisfy', {
            important: 1,
            alsoImportant: [
                {id: 123},
                {id: 124}
            ]
        });
    });
})
