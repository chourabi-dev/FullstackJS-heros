
/**
 *  <div class="view-select selected" id="grid-selected">
                                        <i class="fas fa-th"></i>
                                    </div>
                                    <div class="view-select" id="list-selected">
                                        <i class="fas fa-list"></i>
                                    </div>
 */

var gridSelected = document.getElementById('grid-selected');
var listSelected = document.getElementById('list-selected');

var displayMode = 0;  // 0 grid 1 list

gridSelected.addEventListener('click',function(){
    gridSelected.className="view-select selected"
    listSelected.className="view-select "
    displayMode=0;
    initProds();
})

listSelected.addEventListener('click',function(){
    gridSelected.className="view-select  "
    listSelected.className="view-select selected"
    displayMode = 1;
    initProds();
})
///////*********************************************************** */

var products = [
    { id:15, name:"Iphone 13", price: 2500, category : 0, photoURL:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1617135051000" },
    { id:15, name:"Samsung NOTE12", price: 4300, category : 0, photoURL:"https://images.samsung.com/fr/smartphones/galaxy-note20/buy/carousel/mobile/001-note20series-productimage.jpg" },
    { id:15, name:"LG 40'", price: 1500, category : 1, photoURL:"https://media.croma.com/image/upload/v1605119605/Croma%20Assets/Entertainment/Television/Images/8810758242334.jpg" },
    { id:15, name:"Samsung 50'", price: 2930, category : 1, photoURL:"https://images.samsung.com/is/image/samsung/levant-uhd-tu8000-ua50tu8000uxtw-frontblack-229856395?$720_576_PNG$" },
    
];


var prodsList = document.getElementById('prods');



/*******************************filters**************************** */


var search = document.getElementById('search');
var range = document.getElementById('range');
var category = document.getElementById('category');


var searchValue = null;
var rangeValue = null;
var categoryValue = null;


var pf = document.getElementById('price-filter');

pf.innerHTML=maxPrice()+' $';
 
search.addEventListener('keyup',function(e){
    const val = e.target.value;

    console.log(val);

    searchValue = val;

    initProds(searchValue,rangeValue,categoryValue);
})

range.addEventListener('change',function(e){
    const val = e.target.value;

    console.log(val);
    rangeValue = val;


    /**
     * 100 %  max
     * 
     * n%  
     */

    rangeValue = (Number(val) * maxPrice() / 100).toFixed();
 

    pf.innerHTML=rangeValue+' $';

    initProds(searchValue,rangeValue,categoryValue);
})
category.addEventListener('change',function(e){
    const val = e.target.value;

    console.log(val);
    categoryValue = val;
    initProds(searchValue,rangeValue,categoryValue);
})


function initProds(keys = null, minPrice = null , category = null){
    let blocHTML = '';
 
    products.filter(
        (p)=>{

            let canBeShown = false;

            let foundByKeys = false;
            let foundByminPrice = false;
            let foundBycategory = false;
            

            if (keys != null) {
                if ( p.name.toLowerCase().indexOf(keys.toLowerCase()) != -1 ) {
                    foundByKeys = true;
                }
            }


            if (category != null) {
                if ( p.category == category ) {
                    foundBycategory = true;
                }
            }


            
            if (rangeValue != null) {
                if ( p.price <= minPrice ) {
                    foundByminPrice = true;
                }
            }

            
            if (keys != null && category != null) {
                canBeShown = (foundByKeys && foundBycategory);
            }

            if (keys != null && category != null && minPrice != null) {
                canBeShown = (foundByKeys && foundBycategory && foundByminPrice);
            }



            if (keys != null && category == null ) {
                canBeShown = (foundByKeys );
            }

            if ( category != null && keys == null ) {
                canBeShown = (foundBycategory );
            }
            
            if ( minPrice != null && keys == null ) {
                canBeShown = (foundByminPrice );
            }
            if ( minPrice != null && category == null ) {
                canBeShown = (foundByminPrice );
            }

            if ( minPrice != null && category != null ) {
                canBeShown = (foundByminPrice && foundBycategory );
            }

            if ( minPrice != null && keys != null ) {
                canBeShown = (foundByminPrice && foundByKeys );
            }
            
 
            if (keys != null && category != null && minPrice != null) {
                canBeShown = (foundByminPrice && foundByKeys && foundBycategory );
            }

            if (keys == null && category == null && minPrice == null) {
                return true;
            } else {
                return ( canBeShown );
            }

            
        }
    ).map((p)=>{
        switch (displayMode) {
            case 0:
                blocHTML+=`
                <div class="col-sm-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <img class="w-100" src="${p.photoURL}" alt="">
                            <h3>${p.name}</h3>
                                <p>
                                ${p.category}
                                </p>
                                <p> ${p.price} </p>
                        </div>
                    </div>
                </div>`;
                
                break;
        
            default:

                blocHTML+=`
                <div class="col-sm-12 mb-3">
                    <div class="card">
                        <div class="card-body d-flex">
                            <div class="" style="width: 50%;">
                                <img class="w-100" src="${p.photoURL}" alt="">
                            </div>
                            <div class="details">
                                <h3>${p.name}</h3>
                                <p>
                                ${p.category}
                                </p>
                                <p> ${p.price} $ </p>
                            </div>
                        </div>
                    </div>
                </div>`;



                break;
        }
    })

    prodsList.innerHTML=blocHTML;
}




function maxPrice(){
    let max = 0;

    products.map((p)=>{
        if (p.price>max) {
            max = p.price;
        }
    })

    return max;
}




/*************init*********** */

initProds();