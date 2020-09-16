
 
 function f1(){
    var coo =document.getElementById("statename").value;

        fetch('https://api.covidindiatracker.com/state_data.json').then(
            res=>{
                res.json().then(
                    data=>{
                        
                     console.log(data);
                     if(data.length>0){
                         var temp="";

                         data.forEach((u )=>{
                             if(u.state==coo){
                             temp+="<tr class='table-success'>";
                             temp+="<td>"+u.state+"</td>";

                             temp+="<td>"+u.active+"</td>";
                             temp+="<td>"+u.confirmed+"</td>";
                            
                             temp+="<td>"+u.deaths+"</td>";
                             
                           temp+="</tr>"
                             }

                         })

                        
                         document.getElementById("data").innerHTML += temp;
                     }
                    
                    }
                )
            }
        ) }
    