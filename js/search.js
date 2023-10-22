const search = () =>{
    //Gets value from the user and stored in the serach box
    const searchbox = document.getElementById("search-item").value.toUpperCase();

    //Access the items in catalog and store them
    const storeitems = document.getElementById("list");

    //Select all items under the .item class
    const product = document.querySelectorAll(".item");

    //Reads all the h2 text within the list and stores them
    const pname = storeitems.getElementsByTagName("h2");

    // Keeps the loop running as long as i is less than the lenght of itmes in my list
    for(var i=0; i<pname.length; i++){
        //The typed value and stores it in match
        let match = product[i].getElementsByTagName("h2")[0];

        //Runs when the box is typed into
        if(match){

            //If the match value is matching the catalog values
            let textvalue = match.textContent || match.innerHTML

            //Turn it to uppercase so that the box will not be case sensitive and will filter
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                //
                product[i].style.display = "";
            }else{
                //If it is not matching, remove the products from view
                product[i].style.display = "none";
            }
        }
    }

}