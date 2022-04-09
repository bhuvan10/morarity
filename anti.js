function func2()
{
    if(document.getElementById("ans1").value.toUpperCase() =="A")
    {
      if(document.getElementById("ans2").value.toUpperCase() =="C")
      {
        if(document.getElementById("ans3").value.toUpperCase() =="U")
        {
          if(document.getElementById("ans4").value.toUpperCase() =="U")
          {
            if(document.getElementById("ans5").value.toUpperCase()=="8")
          
          {
                document.getElementById("link").setAttribute('href','/timer.html');
            }
            else
            {
            
             document.getElementById("link").setAttribute('href','/dead.html');
            }
          }
          else
          {
            document.getElementById("link").setAttribute('href','/dead.html');
          }
          }
          else
          {
           document.getElementById("link").setAttribute('href','/dead.html');
        }
        }
        else
        {
         document.getElementById("link").setAttribute('href','/dead.html');   
        }
    }
    else
    {
     document.getElementById("link").setAttribute('href','/dead.html');
    }

}