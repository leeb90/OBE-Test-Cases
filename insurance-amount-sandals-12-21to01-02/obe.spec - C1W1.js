// obe.spec.js
const expect = require('chai').expect;
const ObePage = require('app/obe.page');
const numeral= require('numeral');



const resortArray = require('app/resortsobe').resorts;

describe('Insurance Amount Sandals Canada', function()  {

    let Checkin;
	let Checkout;
	this.retries(1);
    
    it('Should Test Insurance Amount for Canada', ()=> {

        Checkin= new Date();
		Checkin.setDate(Checkin.getDate() + 18);
		Checkout= new Date(Checkin);
		Checkout.setDate(Checkin.getDate() + 3);
		
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
        ObePage.country.selectByValue('CANADA');
        ObePage.state.selectByValue('AB');
        ObePage.zip.setValue('T0E 0A0');
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


            InsuranceTotal= numeral(ObePage.InsuranceMessage.match(/[^$]*$/).toString()).value();
            HoldOption= numeral(ObePage.HoldPayment.match(/[^$]*$/).toString()).value();
            FullOption= numeral(ObePage.FullPayment.match(/[^$]*$/).toString()).value();

            let InsurancexAdults, HoldTotal, FullTotal;


        if((Checkin.getMonth()===11 && Checkin.getDate()>=21 && Checkin.getDate()<=31) 
        || (Checkin.getMonth()===0 && Checkin.getDate()>=1 && Checkin.getDate()<=2)){

            InsurancexAdults= 2*124.00;
            message='Expect Insurance Message to Appear for dates Between December 31 and Janury 2 on Step 4';
            
        }
        else {
            //Calculations
            InsurancexAdults= 2*114.00;
            message='Expect Insurance Message to Appear on Step 4';
        }
        HoldTotal= HoldOption+InsuranceTotal;
        FullTotal= FullOption+InsuranceTotal;
    

        ObePage.InsuranceAgreeButton.click();


    //New Values after click
        HoldOption2= numeral(ObePage.HoldPayment.match(/[^$]*$/).toString()).value();
        FullOption2= numeral(ObePage.FullPayment.match(/[^$]*$/).toString()).value();


        expect(ObePage.InsuranceAgree,message).to.be.true;
        expect(InsuranceTotal).to.equal(InsurancexAdults);
        expect(HoldTotal).to.equal(HoldOption2);
        expect(FullTotal).to.equal(FullOption2);

                
        });

});


