This is a demo of the ANSI colour parser in wallaby, that appears to be swallowing line breaks.

When a line begins with an ANSI code, the line break is swallowed by wallaby, but not by other interpreters (e.g. a standard console, the console in webstorm)

use `npm test` to run the test in a console to see the difference in error message
