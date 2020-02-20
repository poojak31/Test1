// Import stylesheets
// import './style.css';



      function opration()
      {
       var no1=parseInt(document.getElementById('no1').value);
       var no2=parseInt(document.getElementById('no2').value);
       var oper=document.getElementById('operator').value;
    
    if(document.form1.no1.value == "" || document.form1.no1.value == null)
    {
            alert("enter no1 to calculate");
    }
    else if(document.form1.no2.value == "" || document.form1.no2.value == null)
    {
        alert("enter no2 to calculate");
    }

    if(oper=="add")
    {
      document.getElementById('result').value =no1+no2;
    }
    if(oper=="subt")
    {
      document.getElementById('result').value = no1-no2;
    }
    if(oper=="mult")
    {
     document.getElementById('result').value = no1*no2;
    }
    if(oper=="div")
    {
      if(no2=='0')
      {
           alert('It is invalid number,please enter valid number');
      }
      else
      {
       document.getElementById('result').value = no1/no2;
    }
    }
      
}

   



