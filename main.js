var names_of_people = [];
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
	names_of_people.push(GuestName);
	console.log(GuestName);    
    console.log(names_of_people);
    var lenght_of_name = names_of_people.length;
    console.log(lenght_of_name);
	document.getElementById("display_name").innerHTML=names_of_people.toString();
   }



function show()
{
	var i= names_of_people.join("<br>");
	console.log(names_of_people);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	
	}


function sorting()
	{
		names_of_people.sort();      
		var i= names_of_people.join("<br>");
		console.log(names_of_people);		
		document.getElementById("sorted").innerHTML=i.toString();
		}


function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}

function my_keydown(e)
{
	keypress = e.keyCode;
	console.log(keyPressed);

		if((keyPressed >-97 && keyPressed<-122)|| (keyPressed >-65 && keyPressed<-90))
		{
			aplhabetkey();
			document.getElementById("d1").innerHTML="You pressed Aplhabet Key";
			console.log("aplhabet key");


		}

}


function aplhabetkey()
{
		img_image="Alpkey.png";
	add();

}