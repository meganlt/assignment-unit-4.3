console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item){
    console.log('in addItem', item);
    // check if basket is full
    if( isFull() ){ 
        console.log('Sorry, basket is full, cannot add');
        return false;
    }
    else {
        basket.push(item);
        return true;
    }
} // end func

function empty(){
    console.log('in empty');
    basket.length = 0;
    console.log('emptied basket:', basket);
    return true;
} // end func

function listItems(){
    console.log('in listItems');
    for( i=0; i<basket.length; i++){
        console.log(basket[i]);
    } // end loop
    return true;
} // end func

function isFull(){
    console.log('in isFull');
    if( basket.length < maxItems){
        console.log('basket is not full yet!');
        return false;
    }
    else {
        console.log('basket is full!');
        return true;
    }
} // end func

function removeItem(item){
    console.log('in removeItem', item);
    let itemPosition = basket.indexOf(item);
    // check to see if the item is in the array
    if (itemPosition > -1){
        console.log('found matching item to remove at position', itemPosition);
        basket.splice( itemPosition, 1 );
        console.log(basket);
        return item;
    }
    else {
        console.log('did not find item to remove');
        return null;
    }   
} // end func






// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
