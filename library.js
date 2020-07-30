function isTouching(object1,object2){
  object1right = object1.x-object1.width;
  object2left = object2.width;
    if(object1right>=object2left){
  
    return true;
  
   }
  
  
   else {
   return false;
  
   }
  }

 