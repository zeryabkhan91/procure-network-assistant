User.aggregate([{ 
 $lookup: {
  from: 'Orders',
  let: {ID: '$ID'},
  pipeline: [{$match: {
   $expr: {
    $eq: [
     '$User_ID', '$$ID'
    ],
    $gt: [
     '$quantity', 5
    ]
   }}}]
   as: 'OrdersData'
 }}]);