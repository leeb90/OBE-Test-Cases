// obe.spec.js
const expect = require('chai').expect;
const ObePage = require('../obe.page');
const addDate = require("add-subtract-date");

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

const CurrentDate1 = new Date(d.getFullYear(),d.getMonth(),d.getDate());
const CurrentDate2 = new Date(d.getFullYear(),d.getMonth(),d.getDate());
const CurrentDate3 = new Date(d.getFullYear(),d.getMonth(),d.getDate());
const CurrentDate4 = new Date(d.getFullYear(),d.getMonth(),d.getDate());
const CurrentDate5 = new Date(d.getFullYear(),d.getMonth(),d.getDate());
const CurrentDate6 = new Date(d.getFullYear(),d.getMonth(),d.getDate());
const CurrentDate7 = new Date(d.getFullYear(),d.getMonth(),d.getDate());
const CurrentDate8 = new Date(d.getFullYear(),d.getMonth(),d.getDate());

let year ='';
let m='';
let f='';
let AddDays='';
let date='';
let month='';
let Resort='';
let AlertMessage='';



function SetMonth(month){

switch(month){

              case "Jan":
              return m='1';
              break;

                case "Feb":
              return m='2';
              break;

              case "Mar":
              return m='3';
              break;

              case "Apr":
              return m='4';
              break;

              case "May":
              return m='5';
              break;

              case "Jun":
               return m='6';
              break;

              case "Jul":
               return m='7';
              break;

              case "Aug":
              return m='8';
              break;

              case "Sep":
              return m='9';
              break;

              case "Oct":
              return m='10';
              break;

              case "Nov":
              return m='11';
              break;

              case "Dec":
              return m='12';
              break;


             };


}

function SetDate(day){

switch(day){

              case "01":
              return f='1';
              break;

                case "02":
              return f='2';
              break;

              case "03":
              return f='4';
              break;

              case "04":
              return f='4';
              break;

              case "05":
              return f='5';
              break;

              case "06":
               return f='6';
              break;

              case "07":
               return f='7';
              break;

              case "08":
              return f='8';
              break;

              case "09":
              return f='9';
              break;

              case "10":
              return f='10';
              break;

              case "11":
              return f='11';
              break;

              case "12":
              return f='12';
              break;

              case "13":
              return f='13';
              break;

              case "14":
              return f='14';
              break;

              case "15":
              return f='15';
              break;

              case "16":
              return f='16';
              break;

              case "17":
              return f='17';
              break;

              case "18":
              return f='18';
              break;

              case "19":
              return f='19';
              break;

              case "20":
              return f='20';
              break;

              case "21":
              return f='21';
              break;

              case "22":
              return f='22';
              break;

              case "23":
              return f='23';
              break;

              case "24":
              return f='24';
              break;

              case "25":
              return f='25';
              break;

              case "26":
              return f='26';
              break;

              case "27":
              return f='27';
              break;

              case "28":
              return f='28';
              break;

              case "29":
              return f='29';
              break;

              case "30":
              return f='30';
              break;

              case "31":
              return f='31';
              break;


             };


}



describe('Proper Messages according to Certain inputs on Validation Promo Code C1W2', function()  {

      this.retries(4);

    it('should display message Please select your Resort when apply code without selecting resort/dates C1W2', ()=> {

    console.log('TEST STARTING: Display message Please select your Resort when apply code without selecting resort/dates C1W2');

  
    ObePage.open('IP OF APPLICATION');

    ObePage.resort.selectByValue('0');
    ObePage.promocodetext.setValue('hsdkfhslkfd');
    ObePage.validatecode.click();

    AlertMessage=browser.alertText();
    browser.alertAccept();

    expect(AlertMessage).to.equal('Please select your Resort.');

    });



    it('should display message Please select a valid Check-in-date C1W2', ()=> {

    console.log('TEST STARTING: Display message Please select a valid Check-in-date C1W2');

  
    ObePage.open('IP OF APPLICATION');


    Resort= resortArray[Math.floor(Math.random() * resortArray.length)];
    ObePage.resort.selectByValue(Resort);

    ObePage.validatecode.click();

    AlertMessage=browser.alertText();
    browser.alertAccept();

    expect(AlertMessage).to.equal('Please select a valid Check-in date.');

    });









it('should display message Please enter a Promotional Code C1W2', ()=> {

    console.log('TEST STARTING: Display message Please enter a Promotional Code C1W2');
  
    ObePage.open('IP OF APPLICATION');

    AddDays= addDate.add(CurrentDate1,15,"days").toString();
    month= AddDays.slice(4,7);
    date= AddDays.slice(8,10);
    year=AddDays.slice(11,15);
    addDate.subtract(CurrentDate1,15,"days");


    Resort= resortArray[Math.floor(Math.random() * resortArray.length)];


    ObePage.resort.selectByValue(Resort);
    ObePage.chkinmonth.selectByValue(SetMonth(month));
    ObePage.chkinday.selectByValue(SetDate(date));
    ObePage.chkinyear.selectByValue(year);
    ObePage.promocodetext.setValue('');

    ObePage.validatecode.click();

    AlertMessage=browser.alertText();
    browser.alertAccept();

    expect(AlertMessage).to.equal('Please enter a Promotional Code.');

    });





it('should display message Sorry. The promo code you entered is invalid C1W2', ()=> {

    console.log('TEST STARTING: Display message Sorry. The promo code you entered is invalid C1W2');
  
    ObePage.open('IP OF APPLICATION');

    Resort= resortArray[Math.floor(Math.random() * resortArray.length)];


    ObePage.resort.selectByValue(Resort);
    ObePage.chkinmonth.selectByValue(SetMonth(month));
    ObePage.chkinday.selectByValue(SetDate(date));
    ObePage.chkinyear.selectByValue(year);
    ObePage.promocodetext.setValue('test');
    ObePage.validatecode.click();


browser.waitUntil(()=>{
              
          return ObePage.promocodemessage;
        
            });

    

    AlertMessage= ObePage.promocodemessagetext;

    expect(AlertMessage).to.include('Sorry.');

    });






it('should display message The group code provided could not be matched with any existing group C1W2.', ()=> {

    console.log('TEST STARTING: Display message The group code provided could not be matched with any existing group C1W2.');

    ObePage.open('IP OF APPLICATION');

    Resort= resortArray[Math.floor(Math.random() * resortArray.length)];

    ObePage.resort.selectByValue(Resort);
    ObePage.chkinmonth.selectByValue(SetMonth(month));
    ObePage.chkinday.selectByValue(SetDate(date));
    ObePage.chkinyear.selectByValue(year);

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




