# MongoDB $inc Operator Error: Handling Non-Existent Fields

This repository demonstrates a common error when using the `$inc` operator in MongoDB: attempting to increment a field that does not yet exist.  The `$inc` operator only increments existing numerical fields; it doesn't create new ones.

The `bug.js` file contains code that exhibits this error. The `bugSolution.js` file provides a solution using the `$inc` operator within a conditional statement to handle cases where the field does not exist initially.

## How to Reproduce the Error

1.  Clone this repository.
2.  Ensure you have MongoDB and a Node.js environment set up.
3.  Run the code in `bug.js`. Observe that if the 'counter' field is not present in a document, the increment will not occur.

## Solution

The solution is to use an update operator like `$setOnInsert` along with `$inc` to handle situations where the field might not exist yet. The updated code is provided in `bugSolution.js`.