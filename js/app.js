const smallMemory=document.getElementById('8Gb-memory');
const bigMemory=document.getElementById('16Gb-Memory');
const smallStorage=document.getElementById('256-Storage');
const mediumStorage=document.getElementById('512-Storage');
const bigStorage=document.getElementById('1tb-Storage');
const freeDelivery=document.getElementById('free-delivery');
const fridayDelivery=document.getElementById('friday-Delivery');
const extraMemoryCost=document.getElementById('Extra-memory');
const extraStorageCost=document.getElementById('extra-Storage');
const inputField=document.getElementById('input-field')
const applyButton=document.getElementById('apply-btn')
const deliveryCharge=document.getElementById('Deliver-Charge');
const finalTotalPrice=document.getElementById('total');
const grandTotal=document.getElementById('final-total')

smallMemory.addEventListener('click', function(){
    extraMemoryCost.innerText="0";
    updateTotal()
})

bigMemory.addEventListener('click', function(){
    extraMemoryCost.innerText='180';    
    updateTotal()
})
smallStorage.addEventListener('click', function(){
    extraStorageCost.innerText='0';
    updateTotal()
})
mediumStorage.addEventListener('click', function(){
    extraStorageCost.innerText='100';
    updateTotal()
})
bigStorage.addEventListener('click', function(){
    extraStorageCost.innerText='180';
    updateTotal()
})

freeDelivery.addEventListener('click', function(){
    deliveryCharge.innerText='0';
    updateTotal()

})
fridayDelivery.addEventListener('click', function(){
    deliveryCharge.innerText='20';
    updateTotal()
})
//this is
function updateTotal(){
    const memoryCharge= Number(extraMemoryCost.innerText);
    const storagePrice= Number(extraStorageCost.innerText);
    const deliverPrice= Number(deliveryCharge.innerText);
    const granTotal= 1299 + memoryCharge + storagePrice + deliverPrice;
    grandTotal.innerText=granTotal;
}
