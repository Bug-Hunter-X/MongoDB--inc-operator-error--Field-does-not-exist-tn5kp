```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("6517a78d2a5c340a79e77f95")}, {"$inc": {"counter": 1}, $setOnInsert: {counter: 0}});
```