import react from "react";
//import month from "./Homepage";

export function seasonalProduceList(month) {
  let produce = [];  
  switch(month) {  
      
       case "January":
       produce.push( 
          "Apples",
          "Hazelnuts",
          "Pears",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes",
          "Turnips"
       );
       break;
   case "February":
     produce.push(
       "Apples",
       "Hazelnuts",
       "Pears",
       "Garlic",
       "Mushrooms",
       "Onions",
       "Potatoes"
     );
     break;
       case "March":
       produce.push( 
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes"
       );
   break;
       case "April":
       produce.push( 
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Asparagus",
          "Garlic",
          "Lettuce",
          "Mushrooms",
          "Onions",
          "Potatoes"
       );
    break; 
       case "May":
       produce.push(  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Asparagus",
          "Cauliflower",
          "Garlic",
          "Lettuce",
          "Potatoes",
          "Radishes"
       );
    break; 
       case "June":
       produce.push(  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Blackberries",
          "Cherries",
          "Raspberries",
          "Strawberries",
          "Asparagus",
          "Broccoli",
          "Cauliflower",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Potatoes",
          "Radishes",
          "Squash"
       );
    break; 
       case "July":
       produce.push(  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Apricots",
          "Blackberries",
          "Blueberries",
          "Cherries",
          "Melons",
          "Nectarines",
          "Peaches",
          "Raspberries",
          "Strawberries",
          "Tomatoes",
          "Beets",
          "Broccoli",
          "Brussel Sprouts",
          "Cabbage",
          "Carrots",
          "Cauliflower",
          "Cucumber",
          "Eggplant",
          "Garlic",
          "Green Beans",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Potatoes",
          "Radishes",
          "Squash",
          "Turnips"
       );
    break; 
       case "August":
       produce.push(
          "Apples",
          "Apricots",
          "Blackberries",
          "Blueberries",
          "Cherries",
          "Melons",
          "Nectarines",
          "Peaches",
          "Pears",
          "Plums",
          "Raspberries",
          "Rhubarb",
          "Strawberries",
          "Tomatoes",
          "Beets",
          "Broccoli",
          "Brussel Sprouts",
          "Cabbage",
          "Carrots",
          "Cauliflower",
          "Corn",
          "Cucumber",
          "Eggplant",
          "Garlic",
          "Green Beans",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Onions",
          "Peas",
          "Peppers",
          "Potatoes",
          "Radishes",
          "Squash",
          "Turnips"
       );
    break; 
       case "September":
       produce.push(  
          "Apples",
          "Blueberries",
          "Grapes",
          "Melons",
          "Peaches",
          "Pears",
          "Plums",
          "Raspberries",
          "Tomatoes",
          "Broccoli",
          "Brussel Sprouts",
          "Cabbage",
          "Carrots",
          "Cauliflower",
          "Corn",
          "Cucumber",
          "Eggplant",
          "Garlic",
          "Green Beans",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Onions",
          "Peas",
          "Peppers",
          "Potatoes",
          "Radishes",
          "Squash",
          "Turnips"
       );
    break; 
       case "October":
       produce.push(  
          "Apples",
          "Grapes",
          "Hazelnuts",
          "Melons",
          "Peaches",
          "Pears",
          "Tomatoes",
          "Broccoli",
          "Brussel Sprouts",
          "Cabbage",
          "Carrots",
          "Cauliflower",
          "Corn",
          "Cucumber",
          "Eggplant",
          "Garlic",
          "Green Beans",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Onions",
          "Peas",
          "Peppers",
          "Potatoes",
          "Pumpkins",
          "Radishes",
          "Squash",
          "Turnips"
       );
    break; 
       case "November":
       produce.push(  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Broccoli",
          "Carrots",
          "Cauliflower",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes",
          "Squash",
          "Turnips"
       );
    break; 
       case "December":
       produce.push(  
          "Apples",
          "Hazelnuts",
          "Pears",
         "Broccoli",
          "Carrots",
          "Cauliflower",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes",
          "Turnips"
       );
   default:
   break;
  }  
  return produce;
}

