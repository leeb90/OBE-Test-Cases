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

let year = d.getFullYear();
let m='';
let f='';
let Today='';
let dateBalanceDue='';
let Resort='';
let AddDays='';
let month='';
let date='';




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


describe('Free Room Cancelation', function()  {

      this.retries(4);
   
    
    it('should test Free Room Cancellation Date less than 45 days C1W4', ()=> {

            console.log('TEST STARTING: Free Room Cancellation Date less than 45 days C1W4');

            ObePage.open('IP OF APPLICATION');
       
    	    AddDays =addDate.add(CurrentDate1,25,"days").toString();
            month= AddDays.slice(4,7);
            date=AddDays.slice(8,10);
            addDate.subtract(CurrentDate1,25,"days");

            Resort=resortArray[Math.floor(Math.random() * resortArray.length)];

            ObePage.resort.selectByValue(Resort);
            ObePage.chkinmonth.selectByValue(SetMonth(month));
            ObePage.chkinday.selectByValue(SetDate(date));
            ObePage.chkinyear.selectByValue(year);
            ObePage.submit.submitForm();
            

             browser.waitUntil(()=>{
              if(ObePage.rooms===true){

              	if(ObePage.Total===""){
              		Resort=resortArray[Math.floor(Math.random() * resortArray.length)];

              		ObePage.resort.selectByValue(Resort);
                    ObePage.chkinmonth.selectByValue(SetMonth(month));
                    ObePage.chkinday.selectByValue(SetDate(date));
                    ObePage.chkinyear.selectByValue(year);
                    ObePage.requote.submitForm();

              	}

              else {

              	return true;
              }
          }
        
            });


             addDate.subtract(CurrentDate1,25,"days").toString();

             expect(ObePage.FreeRoom).to.be.false;


            
    });



    it('should test Free Room Cancellation Date more than 45 days C1W4', ()=> {

            console.log('TEST STARTING: Free Room Cancellation Date more than 45 days C1W4');

            ObePage.open('IP OF APPLICATION');

    	    AddDays =addDate.add(CurrentDate2,75,"days").toString();
            month= AddDays.slice(4,7);
            date=AddDays.slice(8,10);
            Resort=resortArray[Math.floor(Math.random() * resortArray.length)];

        
            ObePage.resort.selectByValue(Resort);
            ObePage.chkinmonth.selectByValue(SetMonth(month));
            ObePage.chkinday.selectByValue(SetDate(date));
            ObePage.chkinyear.selectByValue(year);
            ObePage.submit.submitForm();
            

             browser.waitUntil(()=>{
              if(ObePage.rooms===true){

              	if(ObePage.Total===""){

              		Resort=resortArray[Math.floor(Math.random() * resortArray.length)];

              		ObePage.resort.selectByValue(Resort);
                    ObePage.chkinmonth.selectByValue(SetMonth(month));
                    ObePage.chkinday.selectByValue(SetDate(date));
                    ObePage.chkinyear.selectByValue(year);
                    ObePage.requote.submitForm();

              	}
              
              else {

              	return true;
              }
          }
        
            });

             let subtractDays30 = addDate.subtract(CurrentDate2,31,"days").toString(); //Subtract 30 days to the checkin date
             date=subtractDays30.slice(8,10); //Slice the message that appears on each room
             month= subtractDays30.slice(4,7);
             year=subtractDays30.slice(11,15);

             expect(ObePage.FreeRoom).to.be.true;


            for (let x=0; x< ObePage.FreeRoomText.length; x++){

              let dateMessage= ObePage.FreeRoomText[x];
              expect(dateMessage).to.include(SetDate(date));
              expect(dateMessage).to.include(SetMonth(month));
              expect(dateMessage).to.include(year);
             };  



});

    });




