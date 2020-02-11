/** - 
 */


//  const compareProfits = (stockList) => {
//    let bestValue = 0;
//    let profit = 0;

//    for (let i = 0; i < stockList.length; i++) {
//      for (let j = 0+i; j < stockList.length; j++) {
//        profit = stockList[j] - stockList[i]; 

//        if (profit > bestValue) {
//          bestValue = profit; 
//        }
//      }
//    }
//   console.log(`Highest values array is ${bestValue}`);
//  }

//  compareProfits([45, 24, 35, 31, 40, 38, 11]);






//  const compareProfits = (stockList) => {
//    let bestValue = 0;
//    let profit = 0;

//    for (let i = 0; i < stockList.length; i++) {
//      for (let j = 0+i; j < stockList.length; j++) {
//        profit = stockList[j] - stockList[i]; 

//        if (profit > bestValue) {
//          bestValue = profit; 
//        }
//      }
//    }
//   console.log(`Highest values array is ${bestValue}`);
//  }



const compareProfits = (stocklist, splitIndex, bestProfit) => { 

  const currentValue = stocklist[splitIndex]; 
  const newStockList = stocklist.slice(splitIndex+1);
  // const bestProfit = 0;
  let profit = 0;
  for (let i = splitIndex; i < stocklist.length; i++) {
    profit = newStockList[i] - currentValue;

    if(profit > bestProfit) {
      bestProfit = profit;
    }
  }

  if (splitIndex == stocklist.length-1) {
    return bestProfit; 
  } else {

    
    return compareProfits(stocklist, splitIndex+1, bestProfit);
  }
}
 console.log(compareProfits([45, 24, 35, 31, 40, 1000, 11], 0, 0));