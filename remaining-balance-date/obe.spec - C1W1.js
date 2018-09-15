// obe.spec.js
const expect = require('chai').expect;
const ObePage = require('app/obe.page');
const resortArray = require('app/resortsobe').resorts;

describe('Remanining Balance Date 30-45 Days', function()  {

	let Checkin;
	let Checkout;
	let Today;
	this.retries(1);

    
    it('Should Test Remaining Balance Date 30-45 Days', ()=> {

            Checkin= new Date();
            Checkin.setDate(Checkin.getDate() + 35);
            Checkout= new Date(Checkin);
            Checkout.setDate(Checkin.getDate() + 3);
            
            let checkinMonth= Checkin.getMonth() +1;
            let checkinDate= Checkin.getDate();
            let checkinYear= Checkin.getFullYear();
            let checkoutMonth= Checkout.getMonth() +1;
            let checkoutDate= Checkout.getDate();
            let checkoutYear= Checkout.getFullYear();

            ObePage.open('https://obe.sandals.com/');
			let Resort= resortArray[Math.floor(Math.random() * resortArray.length)];
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

           ObePage.submit2.click();

           browser.waitUntil(()=>{

            return ObePage.packagesummary===true;


         }); 


           ObePage.title.selectByValue('MR');
           ObePage.gender.selectByValue('M');
           ObePage.address.setValue('Arizona Street');
           ObePage.firstName.setValue('Luis');
           ObePage.lastName.setValue('Honduras');
           ObePage.city.setValue('Arizona')
           ObePage.country.selectByValue('USA');
           ObePage.state.selectByValue('AZ');
           ObePage.zip.setValue('85001');
           ObePage.phone.setValue('6025550138');
           ObePage.email.setValue('lespinoza@sanservices.hn');
           ObePage.age.selectByValue('25');
           ObePage.adult1Title.selectByValue('MRS');
           ObePage.adult1Name.setValue('Luisa');
           ObePage.adult1LastName.setValue('Honduras');
           ObePage.adult1Gender.selectByValue('F');
           ObePage.adult1age.selectByValue('23');
           ObePage.guestInfoBtn.click();

           browser.waitUntil(()=>{

            return ObePage.packagesummary===true;


           }); 

		   Today= new Date();
		   Today.setDate(Today.getDate()+2);
           dateBalanceDue= ObePage.BalanceDueText.slice(48,50);

           expect(ObePage.BalanceDue,'Expect Remaining Balance Message to Appear on Step 4').to.be.true;
           expect(Today.getDate()==dateBalanceDue).to.be.true;

            
    });

});








