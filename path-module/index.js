const path = require('path');

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

const JoinedPath = path.join('user', 'document', 'project');

console.log(JoinedPath);
