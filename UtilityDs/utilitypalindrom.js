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
        var a=[];
        //str=str.trim();
        a=word.toLowerCase().split('');
        for(var i=0;i<a.length;i++)
            {
                deque.pushback(a[i]);
            }
            console.log(deque.printQue());
          var flag=true;
          if(deque.dqsise()%2==0)
          {
              while(deque.dqsise()>0)
              {
                  var a=deque.popfront();
                  var b=deque.popback();
                  if(a!=b)
                  {
                      flag=false;
                  }
              }
          }
          else
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

    

        