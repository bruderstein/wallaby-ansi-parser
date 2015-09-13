

// Mock just enough of UnexpectedError to fool wallaby
function UnexpectedError(ansiMessage) {
   this.getErrorMessage = function (type) {
      return {
          toString: function() {
              return ansiMessage;
          }
      };
   };

   this.actual = 'a';
   this.expected ='b';
   this.showDiff = false;
   this.name = 'UnexpectedError';
}
UnexpectedError.prototype = Object.create(Error.prototype);


describe('ANSI error message handling', function () {

   it('shows line breaks when lines begin with letter', function () {
       throw new UnexpectedError('\x1b[32mLine one\nLine two\x1b[39m');
   });

    it('swallows line breaks when lines begin with ansi code', function () {
        throw new UnexpectedError('\x1b[32mLine one\nLine two\x1b[39m\n\x1b[31mLine 3\x1b[39m');
    });

    it('a simple space is enough to keep the line break', function () {
        throw new UnexpectedError('\x1b[32mLine one\nLine two\x1b[39m\n \x1b[31mLine 3\x1b[39m');
    });
});

