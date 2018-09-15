// obe.spec.js
const expect = require('chai').expect;
const ObePage = require('app/obe.page');
const resortArray = require('app/resortsobe').resorts;

describe('Proper Messages According to Certain Inputs on Validation Promo Code', function()  {

    let Checkin;
    this.retries(1);

    it('Should Display Message Please select your Resort when apply code without selecting resort/dates', ()=> {


  
     ObePage.open('https://obe.sandals.com/');
     ObePage.resort.selectByValue('0');
     ObePage.promocodetext.setValue('hsdkfhslkfd');
     ObePage.validatecode.click();
     AlertMessage=browser.alertText();
     browser.alertAccept();

     expect(AlertMessage).to.equal('Please select your Resort.');

    });




    it('Should Display Message Please select a valid Check-in-date', ()=> {


     ObePage.open('https://obe.sandals.com/');
     Resort= resortArray[Math.floor(Math.random() * resortArray.length)];
     ObePage.resort.selectByValue(Resort);
     ObePage.validatecode.click();
     AlertMessage=browser.alertText();
     browser.alertAccept();

     expect(AlertMessage).to.equal('Please select a valid Check-in date.');

    });



it('Should Display Message Please enter a Promotional Code', ()=> {
    
    Checkin= new Date();
    Checkin.setDate(Checkin.getDate() + 15);
    Checkout= new Date(Checkin);
    Checkout.setDate(Checkin.getDate() + 3);
    
    let checkinMonth= Checkin.getMonth() +1;
    let checkinDate= Checkin.getDate();
    let checkinYear= Checkin.getFullYear();

    ObePage.open('https://obe.sandals.com/');
	Resort= resortArray[Math.floor(Math.random() * resortArray.length)];
    ObePage.resort.selectByValue(Resort);
    ObePage.chkinmonth.selectByValue(checkinMonth);
    ObePage.chkinday.selectByValue(checkinDate);
    ObePage.chkinyear.selectByValue(checkinYear);
    ObePage.promocodetext.setValue('');
    ObePage.validatecode.click();
    AlertMessage=browser.alertText();
    browser.alertAccept();

    expect(AlertMessage).to.equal('Please enter a Promotional Code.');

    });


it('Should Display Message Sorry. The promo code you entered is invalid', ()=> {

  
    Checkin= new Date();
    Checkin.setDate(Checkin.getDate() + 15);
    Checkout= new Date(Checkin);
    Checkout.setDate(Checkin.getDate() + 3);
    
    let checkinMonth= Checkin.getMonth() +1;
    let checkinDate= Checkin.getDate();
    let checkinYear= Checkin.getFullYear();

    ObePage.open('https://obe.sandals.com/');
    Resort= resortArray[Math.floor(Math.random() * resortArray.length)];
    ObePage.resort.selectByValue(Resort);
    ObePage.chkinmonth.selectByValue(checkinMonth);
    ObePage.chkinday.selectByValue(checkinDate);
    ObePage.chkinyear.selectByValue(checkinYear);
    ObePage.promocodetext.setValue('test');
    ObePage.validatecode.click();


    browser.waitUntil(()=>{
              
     return ObePage.promocodemessage;
        
    });

    AlertMessage= ObePage.promocodemessagetext;

    expect(AlertMessage).to.equal('Sorry. The promo code you\'ve entered is either invalid or not applicable for the resort and/or dates you\'ve selected. Please review the details of the offer and try again.');

    });

it('Should Display Message The group code provided could not be matched with any existing group.', ()=> {

   
     
    Checkin= new Date();
    Checkin.setDate(Checkin.getDate() + 15);
    Checkout= new Date(Checkin);
    Checkout.setDate(Checkin.getDate() + 3);
    
    let checkinMonth= Checkin.getMonth() +1;
    let checkinDate= Checkin.getDate();
    let checkinYear= Checkin.getFullYear();

   ObePage.open('https://obe.sandals.com/');

   Resort= resortArray[Math.floor(Math.random() * resortArray.length)];
   ObePage.resort.selectByValue(Resort);
   ObePage.chkinmonth.selectByValue(checkinMonth);
   ObePage.chkinday.selectByValue(checkinDate);
   ObePage.chkinyear.selectByValue(checkinYear);
   ObePage.groupcodechk.click();
   ObePage.groupcodetext.setValue('test');
   ObePage.submit.click();

	 browser.waitUntil(()=>{
              
    return ObePage.groupcodemessage;
        
   });    

   AlertMessage= ObePage.groupcodemessagetext;

   expect(AlertMessage).to.equal('The group code provided could not be matched with any existing group codes. Please check the code and try again.');

   });

});









