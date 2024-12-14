# MongoDB $inc Operator Bug
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is intended to increment a numeric field. If the field doesn't exist or isn't a number, unexpected results may occur.

## Bug Description
Incorrectly using the `$inc` operator in MongoDB update operations can lead to unexpected behavior.  If the target field is not a number or doesn't exist, the update might fail silently, produce an error, or produce unexpected results.

## Solution
The solution is to ensure the target field is a number and exists before attempting to increment it.  This can be achieved using the `$setOnInsert` operator in conjunction with `$inc` to handle cases where the field doesn't exist.