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
              return f='3';
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



describe('Proper Messages according to Certain inputs C1W1', function()  {

      this.retries(4);
    
    it('should display message Please select your travel dates without inputs C1W1', ()=> {

      console.log('TEST STARTING: Display message Please select your travel dates without inputs C1W1');
      ObePage.open('IP OF APPLICATION');

     //  browser.windowHandleSize({width: 1920, height: 1080});

      ObePage.submit.click();

      AlertMessage=browser.alertText();
      browser.alertAccept();

      expect(AlertMessage).to.equal('Please select your travel dates.');

    });


    it('should display message Please select your travel dates when input is only Resort C1W1', ()=> {

      console.log('TEST STARTING: Display message Please select your travel dates when input is only Resort C1W1');

      ObePage.open('IP OF APPLICATION');

      Resort= resortArray[Math.floor(Math.random() * resortArray.length)];

      ObePage.resort.selectByValue(Resort);
      ObePage.submit.click();
      AlertMessage=browser.alertText();
      browser.alertAccept();

      expect(AlertMessage).to.equal('Please select your travel dates.');

    });




    it('should display message Please select a date in the future when select past date C1W1', ()=> {

      console.log('TEST STARTING: Display message Please select a date in the future when select past date C1W1');


      ObePage.open('IP OF APPLICATION');
      Resort= resortArray[Math.floor(Math.random() * resortArray.length)];
      AddDays= addDate.subtract(CurrentDate1,1,"day").toString();
      month= AddDays.slice(4,7);
      date= AddDays.slice(8,10);
      year=AddDays.slice(11,15);
      addDate.add(CurrentDate1,1,"day");

      
      ObePage.resort.selectByValue(Resort);
      ObePage.chkinmonth.selectByValue(SetMonth(month));
      ObePage.chkinday.selectByValue(SetDate(date));
      ObePage.chkinyear.selectByValue(year);

      ObePage.submit.click();

      AlertMessage=browser.alertText();
      browser.alertAccept();

      expect(AlertMessage).to.equal('Please select a date in the future');

    });





    it('should display message Please select a resort first to quote C1W1', ()=> {

      console.log('TEST STARTING: Display message Please select a resort first to quote C1W1');

      ObePage.open('IP OF APPLICATION');
      AddDays= addDate.add(CurrentDate8,35,"days").toString();
      month= AddDays.slice(4,7);
      date= AddDays.slice(8,10);
      year=AddDays.slice(11,15);
      addDate.subtract(CurrentDate8,35,"days")


      ObePage.resort.selectByValue('0');
      ObePage.chkinyear.selectByValue(year);
      ObePage.chkinmonth.selectByValue(SetMonth(month));
      ObePage.chkinday.selectByValue(SetDate(date));
      ObePage.submit.click();

      AlertMessage=browser.alertText();
      browser.alertAccept();

      expect(AlertMessage).to.equal('- Please select a resort first to quote.\n');

    });




    it('should display message Sorry Last Minute Reservation C1W1', ()=> {

     console.log('TEST STARTING: Display message Sorry Last Minute Reservation C1W1');

     ObePage.open('IP OF APPLICATION');

     Resort= resortArray[Math.floor(Math.random() * resortArray.length)];
     AddDays= addDate.add(CurrentDate2,1,"day").toString();
     month= AddDays.slice(4,7);
     date= AddDays.slice(8,10);
     year=AddDays.slice(11,15);
     addDate.subtract(CurrentDate2,1,"day")



     ObePage.resort.selectByValue(Resort);
     ObePage.chkinmonth.selectByValue(SetMonth(month));
     ObePage.chkinday.selectByValue(SetDate(date));
     ObePage.chkinyear.selectByValue(year);
     ObePage.submit.click();
     AlertMessage=browser.alertText();
     browser.alertAccept();


     expect(AlertMessage).to.equal('Sorry, last minute reservations within three days of travel must be called in to our Reservations Department.  Please call 1-888-SANDALS (1-888-726-3257) or 1-888-BEACHES (1-888-232-2437)');

    });




    it('should display message Sorry Last Minute Reservation on step2 Requote C1W1', ()=> {

    console.log('TEST STARTING: Display message Sorry Last Minute Reservation on step 2 Requote C1W1');

    ObePage.open('IP OF APPLICATION');

    Resort= resortArray[Math.floor(Math.random() * resortArray.length)];
    AddDays= addDate.add(CurrentDate3,55,"days").toString();
    month= AddDays.slice(4,7);
    date= AddDays.slice(8,10);
    year=AddDays.slice(11,15);
    addDate.subtract(CurrentDate3,55,"days")

    ObePage.resort.selectByValue(Resort);
    ObePage.chkinmonth.selectByValue(SetMonth(month));
    ObePage.chkinday.selectByValue(SetDate(date));
    ObePage.chkinyear.selectByValue(year);
    ObePage.submit.click();
            

             browser.waitUntil(()=>{
              if(ObePage.rooms===true){

                if(ObePage.Total===""){
                  Resort=resortArray[Math.floor(Math.random() * resortArray.length)];

                  ObePage.resort.selectByValue(Resort);
                  ObePage.chkinyear.selectByValue(year);
                  ObePage.chkinmonth.selectByValue(SetMonth(month));
                  ObePage.chkinday.selectByValue(SetDate(date));
                  ObePage.requote.click();

                }

                else {

                 return true;
              }
          }
        
            });


    AddDays= addDate.add(CurrentDate4,2,"days").toString();
    month= AddDays.slice(4,7);
    date= AddDays.slice(8,10);
    year=AddDays.slice(11,15);
    addDate.subtract(CurrentDate4,2,"days")

    ObePage.chkinyear.selectByValue(year);
    ObePage.chkinday.selectByValue(SetDate(date));
    ObePage.chkinmonth.selectByValue(SetMonth(month));
    browser.alertDismiss();
    ObePage.requote.click();


    AlertMessage=browser.alertText();
    browser.alertAccept();


    expect(AlertMessage).to.equal('Sorry, last minute reservations within three days of travel must be called in to our Reservations Department.  Please call 1-888-SANDALS (1-888-726-3257) or 1-888-BEACHES (1-888-232-2437)');

    });





    it('should display message Air cannot be selected for dates more than 330 C1W1', ()=> {

    console.log('TEST STARTING: Display message Air cannotbe selected for dates more than 330 C1W1');

    ObePage.open('IP OF APPLICATION');

    Resort= resortArray[Math.floor(Math.random() * resortArray.length)];
    AddDays= addDate.add(CurrentDate5,355,"days").toString();
    month= AddDays.slice(4,7);
    date= AddDays.slice(8,10);
    year=AddDays.slice(11,15);
    addDate.subtract(CurrentDate5,355,"days")

    ObePage.resort.selectByValue(Resort);
    ObePage.chkinyear.selectByValue(year);
    ObePage.chkinmonth.selectByValue(SetMonth(month));
    ObePage.chkinday.selectByValue(SetDate(date));
    ObePage.btnair.click();

    AlertMessage=browser.alertText();
    browser.alertAccept();


    expect(AlertMessage).to.equal('Air Availability cannot be selected for dates more than 330 days from today. Your air selection has been deleted.');

    });






    it('should display message Air cannot be selected for dates more than 330 Requote C1W1', ()=> {

    console.log('TEST STARTING: Display message Air cannot be selected for dates more than 330 Requote C1W1');

    ObePage.open('IP OF APPLICATION');
    
    Resort= resortArray[Math.floor(Math.random() * resortArray.length)];
    AddDays= addDate.add(CurrentDate6,120,"days").toString();
    month= AddDays.slice(4,7);
    date= AddDays.slice(8,10);
    year=AddDays.slice(11,15);
    addDate.subtract(CurrentDate6,120,"days")


    ObePage.resort.selectByValue(Resort);
    ObePage.chkinmonth.selectByValue(SetMonth(month));
    ObePage.chkinday.selectByValue(SetDate(date));
    ObePage.chkinyear.selectByValue(year);
    ObePage.btnair.click();
    ObePage.dptcountry.selectByValue('USA');
    ObePage.dptstate.selectByValue('AZ');
    ObePage.dptcity.selectByValue('PHX,PHOENIX');
    ObePage.submit.click();
            

             browser.waitUntil(()=>{
              if(ObePage.rooms===true){

                if(ObePage.Total===""){
                  Resort=resortArray[Math.floor(Math.random() * resortArray.length)];

                  ObePage.resort.selectByValue(Resort);
                    ObePage.chkinmonth.selectByValue(SetMonth(month));
                    ObePage.chkinday.selectByValue(SetDate(date));
                    ObePage.chkinyear.selectByValue(year);
                    ObePage.requote.click();

                }

                else {

                  return true;
              }
          }
        
            });

    AddDays= addDate.add(CurrentDate7,350,"days").toString();
    month= AddDays.slice(4,7);
    date= AddDays.slice(8,10);
    year=AddDays.slice(11,15);
    addDate.subtract(CurrentDate7,350,"days")


    ObePage.chkinyear.selectByValue(year);
    browser.alertDismiss();
    ObePage.chkinmonth.selectByValue(SetMonth(month));
    ObePage.chkinday.selectByValue(SetDate(date));
    ObePage.btnairRq.click();
      

    AlertMessage=browser.alertText();
    browser.alertAccept();


    expect(AlertMessage).to.equal('Air Availability cannot be selected for dates more than 330 days from today. Your air selection has been deleted.');

    });



});




