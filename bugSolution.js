```javascript
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{
  $setOnInsert:{"field":0},
  $inc:{"field":value}
});
```