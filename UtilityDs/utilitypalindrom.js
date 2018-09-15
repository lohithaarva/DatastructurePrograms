module.exports = {

    palindromeChecker : function(word)
    {
     function Deque()
    {
    this.stac=new Array();
    this.popback=function(){
    return this.stac.pop();
    }
        this.pushback=function(item){
        this.stac.push(item);
        }
        this.popfront=function(){
        return this.stac.shift();
        }
            this.pushfront=function(item){
            this.stac.unshift(item);
            }
 this.printQue=function(){
     var str='';
     for(var i=0;i<this.stac.length;i++)
     {
         str+=this.stac[i]+" ";
     }
     return str;
}
this.dqsise=function(){
    return this.stac.length;
}
}
        var deque=new Deque();
        //creatio of an empty array
        var a=[];
        //str=str.trim();
        // converts the entered string into lower case and splits
        a=word.toLowerCase().split('');
        // checks the condition with the length of the string enterted
        for(var i=0;i<a.length;i++)
            {
                //pushback the result
                deque.pushback(a[i]);
            }
            console.log(deque.printQue());
          var flag=true;
          if(deque.dqsise()%2==0)
          {
              while(deque.dqsise()>0)
              {
                  //checking the string by popping from the front
                  var a=deque.popfront();
                  //checking the string by popping from the end 
                  var b=deque.popback();
                  if(a!=b) //checks if the string is equal or not
                  {
                      flag=false;
                  }
              }
          }
         /* else
          {
              while(deque.dqsise()>1)
              {
                var a=deque.popfront();
                var b=deque.popback();
                if(a!=b)
                {
                    flag=false;
                }
              }
              
          }
          */
         //evaluates for the 2 strings which is equal
                if(flag==true)
                {
                console.log("pallindrome")
                process.exit();
                }
                else
                {
                    console.log("not a pallindrome");
                    process.exit();
                }
            }
        }

    

        