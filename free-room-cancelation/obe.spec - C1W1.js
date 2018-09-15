// obe.spec.js
const expect = require('chai').expect;
const ObePage = require('app/obe.page');
const resortArray = require('app/resortsobe').resorts;

describe('Free Room Cancelation More than 45 Days', function()  {

	let Checkin;
	let Checkout;
	let FreeRoomDate;
	this.retries(1);
   
    it('Should Test Free Room Cancellation Date More than 45 Days', ()=> {


			Checkin= new Date();
			Checkin.setDate(Checkin.getDate() + 55);
			Checkout= new Date(Checkin);
			FreeRoomDate= new Date(Checkin);
			Checkout.setDate(Checkin.getDate() + 3);
			FreeRoomDate.setDate(Checkin.getDate()-31);


			let checkinMonth= Checkin.getMonth() +1;
			let checkinDate= Checkin.getDate();
			let checkinYear= Checkin.getFullYear();
			let checkoutMonth= Checkout.getMonth() +1;
			let checkoutDate= Checkout.getDate();
			let checkoutYear= Checkout.getFullYear();


             ObePage.open('https://obe.sandals.com/');
             Resort=resortArray[Math.floor(Math.random() * resortArray.length)];
             ObePage.resort.selectByValue(Resort);
             ObePage.chkinmonth.selectByValue(checkinMonth);
			 ObePage.chkinday.selectByValue(checkinDate);
			 ObePage.chkinyear.selectByValue(checkinYear);
			 ObePage.chkoutmonth.selectByValue(checkoutMonth);
			 ObePage.chkoutday.selectByValue(checkoutDate);
			 ObePage.chkoutyear.selectByValue(checkoutYear);
             ObePage.submit.click();
            

             browser.waitUntil(function (){

             if(ObePage.rooms && ObePage.continuebtn && ObePage.Total){


              return true;

             }

             else if(ObePage.rooms && ObePage.continuebtn && !ObePage.Total){

              Resort=resortArray[Math.floor(Math.random() * resortArray.length)];
              ObePage.resort.selectByValue(Resort);
              ObePage.requote.click();


             }

            });

             expect(ObePage.FreeRoom,'Expect Free Room Cancelation Message to Appear').to.be.true;


             for (let x=0; x< ObePage.FreeRoomText.length; x++){

              let dateMessage= ObePage.FreeRoomText[x];
              expect(dateMessage).to.include(FreeRoomDate.getDate());
              expect(dateMessage).to.include(FreeRoomDate.getMonth()+1);
              expect(dateMessage).to.include(FreeRoomDate.getFullYear());
             }  
    });

    });




