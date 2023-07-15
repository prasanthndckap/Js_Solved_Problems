function items(arr,searchStr){
    let result = []
    for (let i = 0;i<arr.length;i++){
      if (arr[i].product_name!==searchStr){
        result.push(arr[i]) 
      } 
    }
  return result
  }
  console.log(items([
    {product_id:1,product_name:"soap", category: "home"},
    {product_id:2,product_name:"screwdriver", category: "industry"},
    {product_id:3,product_name:"jeans", category: "clothers"}
  ],"jeans"))