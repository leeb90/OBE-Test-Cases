// obe.spec.js
const expect = require('chai').expect;
const ObePage = require('app/obe.page');
const resortArray = require('app/resortsobe').resorts;

describe('Proper Messages According to Certain Inputs', function()  {

	let Checkin;
	this.retries(1);
    
    it('Should Display Message Please select your travel dates without inputs', ()=> {

      
      ObePage.open('https://obe.sandals.com/');

      ObePage.submit.click();

      AlertMessage=browser.alertText();
      browser.alertAccept();

      expect(AlertMessage).to.equal('Please select your travel dates.');

    });


    it('Should Display Message Please select your travel dates when input is only Resort', ()=> {

      

      ObePage.open('https://obe.sandals.com/');

      Resort= resortArray[Math.floor(Math.random() * resortArray.length)];

      ObePage.resort.selectByValue(Resort);
      ObePage.submit.click();
      AlertMessage=browser.alertText();
      browser.alertAccept();

      expect(AlertMessage).to.equal('Please select your travel dates.');

    });




    it('Should Display Message Please select a date in the future when select past date', ()=> {

      
      Checkin= new Date();
      Checkin.setDate(Checkin.getDate() - 1);
      
      let checkinMonth= Checkin.getMonth() +1;
      let checkinDate= Checkin.getDate();
      let checkinYear= Checkin.getFullYear();

      ObePage.open('https://obe.sandals.com/');
      Resort= resortArray[Math.floor(Math.random() * resortArray.length)];
      ObePage.chkinmonth.selectByValue(checkinMonth);
      ObePage.chkinday.selectByValue(checkinDate);
      ObePage.chkinyear.selectByValue(checkinYear);      
      ObePage.submit.click();

      AlertMessage=browser.alertText();
      browser.alertAccept();

      expect(AlertMessage).to.equal('Please select a date in the future');

    });


    it('Should Display Message Please select a resort first to quote', ()=> {

     
      Checkin= new Date();
      Checkin.setDate(Checkin.getDate() + 35);
      let checkinMonth= Checkin.getMonth() +1;
      let checkinDate= Checkin.getDate();
      let checkinYear= Checkin.getFullYear();

      ObePage.open('https://obe.sandals.com/');
      ObePage.resort.selectByValue('0');
      ObePage.chkinyear.selectByValue(checkinYear);
      ObePage.chkinmonth.selectByValue(checkinMonth);
      ObePage.chkinday.selectByValue(checkinDate);
      ObePage.submit.click();

      AlertMessage=browser.alertText();
      browser.alertAccept();

      expect(AlertMessage).to.equal('- Please select a resort first to quote.\n');

    });


    it('Should Display Message Air cannot be selected for dates more than 330', ()=> {

   
      Checkin= new Date();
      Checkin.setDate(Checkin.getDate() + 355);
      let checkinMonth= Checkin.getMonth() +1;
      let checkinDate= Checkin.getDate();
      let checkinYear= Checkin.getFullYear();

     ObePage.open('https://obe.sandals.com/');

     Resort= resortArray[Math.floor(Math.random() * resortArray.length)];
     ObePage.resort.selectByValue(Resort);
     ObePage.chkinyear.selectByValue(checkinYear);
     ObePage.chkinmonth.selectByValue(checkinMonth);
     ObePage.chkinday.selectByValue(checkinDate);
     ObePage.btnair.click();

     AlertMessage=browser.alertText();
     browser.alertAccept();


     expect(AlertMessage).to.equal('Air Availability cannot be selected for dates more than 330 days from today. Your air selection has been deleted.');

    });



    it('Should Display Message Air cannot be selected for dates more than 330 Requote', ()=> {

    
      Checkin= new Date();
      Checkin.setDate(Checkin.getDate() + 45);
      Checkout= new Date(Checkin);
      Checkout.setDate(Checkin.getDate() + 3);
      
      let checkinMonth= Checkin.getMonth() +1;
      let checkinDate= Checkin.getDate();
      let checkinYear= Checkin.getFullYear();
      let checkoutMonth= Checkout.getMonth() +1;
      let checkoutDate= Checkout.getDate();
      let checkoutYear= Checkout.getFullYear();

      ObePage.open('https://obe.sandals.com/');
      Resort= resortArray[Math.floor(Math.random() * resortArray.length)];
      ObePage.resort.selectByValue(Resort);
      ObePage.chkinmonth.selectByValue(checkinMonth);
      ObePage.chkinday.selectByValue(checkinDate);
      ObePage.chkinyear.selectByValue(checkinYear);
      ObePage.chkoutmonth.selectByValue(checkoutMonth);
	  ObePage.chkoutday.selectByValue(checkoutDate);
	  ObePage.chkoutyear.selectByValue(checkoutYear);
      ObePage.btnair.click();
      ObePage.dptcountry.selectByValue('USA');
      ObePage.dptstate.selectByValue('FL');
      ObePage.dptcity.selectByValue('MIA,MIAMI');
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

    Checkin= new Date();
	Checkin.setDate(Checkin.getDate() + 350);

    ObePage.chkinyear.selectByValue(Checkin.getFullYear());
    AlertMessage=browser.alertText();
    browser.alertAccept();
    expect(AlertMessage).to.equal('Air Availability cannot be selected for dates more than 330 days from today. Your air selection has been deleted.');

    });



});








