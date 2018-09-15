const expect = require('chai').expect;
const ObePage = require('app/obe.page');
const resortArray = require('app/resortsobe').resorts;

describe('Check the Number of Airlines Present on the Availability Result', function()  {
	let Checkin;
	let Checkout;
	this.retries(1);
    
    it('Should Test Number Mentioned in the Text and Number of Flights Should be Available', ()=> {
		
		Checkin= new Date();
		Checkin.setDate(Checkin.getDate() + 50);
		Checkout= new Date(Checkin);
		Checkout.setDate(Checkin.getDate() + 3);
		
		let checkinMonth= Checkin.getMonth() +1;
		let checkinDate= Checkin.getDate();
		let checkinYear= Checkin.getFullYear();
		let checkoutMonth= Checkout.getMonth() +1;
		let checkoutDate= Checkout.getDate();
		let checkoutYear= Checkout.getFullYear();

		ObePage.open('https://obe.sandals.com/');
		let Resort=resortArray[Math.floor(Math.random() * resortArray.length)];
		ObePage.resort.selectByValue(Resort);
		ObePage.chkinmonth.selectByValue(checkinMonth);
		ObePage.chkinday.selectByValue(checkinDate);
		ObePage.chkinyear.selectByValue(checkinYear);
		ObePage.chkoutmonth.selectByValue(checkoutMonth);
	        ObePage.chkoutday.selectByValue(checkoutDate);
	        ObePage.chkoutyear.selectByValue(checkoutYear);
		ObePage.btnair.click();
		//TODO bundle in a single function
		ObePage.dptcountry.selectByValue('USA');
		ObePage.dptstate.selectByValue('AZ');
		ObePage.dptcity.selectByValue('PHX,PHOENIX');
		ObePage.submit.click();


		browser.waitUntil(()=>{

		if(ObePage.NoAirMsg===true){
			Resort=resortArray[Math.floor(Math.random() * resortArray.length)];
			ObePage.resort.selectByValue(Resort);
			ObePage.requote.click();

		}
		else if(ObePage.NoAirAv===true){
			Resort=resortArray[Math.floor(Math.random() * resortArray.length)];
			ObePage.resort.selectByValue(Resort);
			ObePage.btnairRq.click();
			ObePage.dptcountry.selectByValue('USA');
			ObePage.dptstate.selectByValue('FL');
			ObePage.dptcity.selectByValue('MIA,MIAMI');
			ObePage.requote.click();

		} 

		else if (ObePage.AirTable===true){

		return true;
		} 
		
		});
    
	expect(ObePage.flightnumbertext).to.include(ObePage.flightnumber.value.length.toString());

            
    });


});




