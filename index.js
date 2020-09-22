
 
 function f1(){
    var coo =document.getElementById("countryname").value;

        fetch('https://api.covid19api.com/summary').then(
            res=>{
                res.json().then(
                    data=>{
                     console.log(data);
                     if(data.Countries.length>0){
                         var temp="";

                         data.Countries.forEach((u )=>{
                             if(u.Country==coo){
                             temp+="<tr class='table-success'>";
                             temp+="<td>"+u.Country+"</td>";

                             temp+="<td>"+u.CountryCode+"</td>";
                             temp+="<td>"+u.Date+"</td>";
                                 
                            temp+="<td>"+u.NewConfirmed+"</td>";
                                 temp+="<td>"+u.NewDeaths+"</td>";
                             temp+="<td>"+u.NewRecovered+"</td>";
                             temp+="<td>"+u.TotalConfirmed+"</td>";
                             temp+="<td>"+u.TotalDeaths+"</td>";
                             temp+="<td>"+u.TotalRecovered+"</td>";
                           temp+="</tr>"
                             }

                         })

                        
                         document.getElementById("data").innerHTML += temp;
                     }
                     document.getElementById("da").innerHTML = "Global Total : "+data.Global.TotalConfirmed+" Global Deaths : "+data.Global.TotalDeaths;
                     document.getElementById("da").style.color="red";
                    }
                )
            }
        ) }
