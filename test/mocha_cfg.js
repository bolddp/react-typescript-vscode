// Make sure import of PNG images doesn't screw up unit tests
require.extensions['.png'] = function(){ return null; }