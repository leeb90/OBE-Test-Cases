// obe.spec.js
const expect = require('chai').expect;
const ObePage = require('../obe.page');
const numeral= require('numeral');


const resortArray = [
    "SEB,S,2",
    "SRB,S,2",
    "SLS,S,2",
    "INN,S,2",
    "SMB,S,2",
    "SNG,S,2",
    "SRC,S,2",
    "BRP,S,6",
    "SWH,S,2",
    "SGL,S,2",
    "SHC,S,2",
    "SLU,S,2",
    "SBD,S,2"
];

const d= new Date();

let month = '12';
let year = d.getFullYear();
let date= '27';
let Resort='';

let InsuranceTotal= '';
let HoldOption= '';
let FullOption= '';
let InsurancexAdults= '';
let HoldTotal= '';
let FullTotal= '';
let HoldOption2= '';
let FullOption2= '';





describe('Insurance Amount Sandals C1W3', function()  {

      this.retries(4);
    
    it('should test insurance amount on Sandals resorts for USA for arrivals between 12-21 and 1-2 C1W3', ()=> {

            console.log('TEST STARTING: Insurance amount on Sandals resorts for USA for arrivals between 12-21 and 1-2 C1W3');

            ObePage.open('IP OF APPLICATION');
            Resort= resortArray[Math.floor(Math.random() * resortArray.length)];
            ObePage.resort.selectByValue(Resort);
            ObePage.chkinmonth.selectByValue(month);
            ObePage.chkinday.selectByValue(date);
            ObePage.chkinyear.selectByValue(year);
            ObePage.submit.click();
            

             browser.waitUntil(()=>{
              if(ObePage.rooms===true){

              	if(ObePage.Total===""){

                  Resort= resortArray[Math.floor(Math.random() * resortArray.length)];

              	  	ObePage.resort.selectByValue(Resort);
                    ObePage.chkinmonth.selectByValue(month);
                    ObePage.chkinday.selectByValue(date);
                    ObePage.chkinyear.selectByValue(year);
                    ObePage.requote.click();

              	}

              else {

              	return true;
              }
          }
        
            });

             ObePage.submit2.submitForm();


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


       InsuranceTotal= numeral(ObePage.InsuranceMessage.match(/[^$]*$/).toString()).value();
       HoldOption= numeral(ObePage.HoldPayment.match(/[^$]*$/).toString()).value();
       FullOption= numeral(ObePage.FullPayment.match(/[^$]*$/).toString()).value();


       //Calculations
       InsurancexAdults= 2*124.00;
       HoldTotal= HoldOption+InsuranceTotal;
       FullTotal= FullOption+InsuranceTotal;

    

       ObePage.InsuranceAgreeButton.click();


       //New Values after click
        HoldOption2= numeral(ObePage.HoldPayment.match(/[^$]*$/).toString()).value();
        FullOption2= numeral(ObePage.FullPayment.match(/[^$]*$/).toString()).value();


      


       expect(ObePage.InsuranceAgree).to.be.true;
       expect(InsuranceTotal).to.equal(InsurancexAdults);
       expect(HoldTotal).to.equal(HoldOption2);
       expect(FullTotal).to.equal(FullOption2);
            
    });

     it('should test insurance amount on Sandals resorts for Canada for arrivals between 12-21 and 1-2 C1W3', ()=> {

            console.log('TEST STARTING: Insurance amount on Sandals resorts for Canada for arrivals between 12-21 and 1-2 C1W3');

            ObePage.open('IP OF APPLICATION');
            Resort= resortArray[Math.floor(Math.random() * resortArray.length)];

            ObePage.resort.selectByValue(Resort);
            ObePage.chkinmonth.selectByValue(month);
            ObePage.chkinday.selectByValue(date);
            ObePage.chkinyear.selectByValue(year);
            ObePage.submit.click();
            

             browser.waitUntil(()=>{
              if(ObePage.rooms===true){

                if(ObePage.Total===""){

                  Resort= resortArray[Math.floor(Math.random() * resortArray.length)];

                    ObePage.resort.selectByValue(Resort);
                    ObePage.chkinmonth.selectByValue(month);
                    ObePage.chkinday.selectByValue(date);
                    ObePage.chkinyear.selectByValue(year);
                    ObePage.requote.click();

                }

              else {

                return true;
              }
          }
        
            });

             ObePage.submit2.submitForm();


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


       InsuranceTotal= numeral(ObePage.InsuranceMessage.match(/[^$]*$/).toString()).value();
       HoldOption= numeral(ObePage.HoldPayment.match(/[^$]*$/).toString()).value();
       FullOption= numeral(ObePage.FullPayment.match(/[^$]*$/).toString()).value();


       //Calculations
       InsurancexAdults= 2*124.00;
       HoldTotal= HoldOption+InsuranceTotal;
       FullTotal= FullOption+InsuranceTotal;

    

       ObePage.InsuranceAgreeButton.click();


       //New Values after click
        HoldOption2= numeral(ObePage.HoldPayment.match(/[^$]*$/).toString()).value();
        FullOption2= numeral(ObePage.FullPayment.match(/[^$]*$/).toString()).value();


      


       expect(ObePage.InsuranceAgree).to.be.true;
       expect(InsuranceTotal).to.equal(InsurancexAdults);
       expect(HoldTotal).to.equal(HoldOption2);
       expect(FullTotal).to.equal(FullOption2);
            
    });




    

});


