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

let year ='';
let m='';
let f='';
let Today='';
let dateBalanceDue='';
let Miles='';





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


describe('Diferent Filtering Options of Airlines C1W2', function()  {

      this.retries(4);
    
    it('should test Different Search Departure Airports are present C1W2', ()=> {

       console.log('TEST STARTING: Different Search Departure Airports are present C1W2');

      ObePage.open('IP OF APPLICATION');
      AddDays =addDate.add(CurrentDate1,200,"days").toString();
      month= AddDays.slice(4,7);
      date=AddDays.slice(8,10);
      year=AddDays.slice(11,15);
      addDate.subtract(CurrentDate1,200,"days");
      Resort=resortArray[Math.floor(Math.random() * resortArray.length)];
      ObePage.resort.selectByValue(Resort);
      ObePage.chkinmonth.selectByValue(SetMonth(month));
      ObePage.chkinday.selectByValue(SetDate(date));
      ObePage.chkinyear.selectByValue(year);
      ObePage.btnair.click();
      ObePage.dptcountry.selectByValue('USA');
      ObePage.dptstate.selectByValue('AZ');
      ObePage.dptcity.selectByValue('PHX,PHOENIX');

      Miles=ObePage.searcharea.getText();

  
      
      expect(Miles).to.include('Search Airport');
      expect(Miles).to.include('30 Miles');
      expect(Miles).to.include('60 Miles');
      expect(Miles).to.include('90 Miles');
      expect(Miles).to.include('120 Miles');
            
    });




    it('should test Verify Search By Fare and Search by First Class Business options are available on first page of the application C1W2', ()=> {
      console.log('TEST STARTING: Verify Search By Fare and Search by First Class Business options are available on first page of the application C1W2');
      expect(ObePage.farebutton[0]).to.be.true;
      expect(ObePage.farebutton[1]).to.be.true;
    });



     it('should test Verify Search By Fare and Search by First Class Business options are available on requote section C1W2', ()=> {

      console.log('TEST STARTING: Verify Search By Fare and Search by First Class Business options are available on requote section C1W2');
     

      ObePage.open('IP OF APPLICATION');
      AddDays =addDate.add(CurrentDate2,90,"days").toString();
      month= AddDays.slice(4,7);
      date=AddDays.slice(8,10);
      year=AddDays.slice(11,15);
      addDate.subtract(CurrentDate2,90,"days");
      Resort=resortArray[Math.floor(Math.random() * resortArray.length)];
      ObePage.resort.selectByValue(Resort);
      ObePage.chkinmonth.selectByValue(SetMonth(month));
      ObePage.chkinday.selectByValue(SetDate(date));
      ObePage.chkinyear.selectByValue(year);
      ObePage.btnair.click();
      ObePage.dptcountry.selectByValue('USA');
      ObePage.dptstate.selectByValue('AZ');
      ObePage.dptcity.selectByValue('PHX,PHOENIX');



      ObePage.submit.click();

      browser.waitUntil(function (){

                if(ObePage.NoAirMsg===true){
                    Resort=resortArray[Math.floor(Math.random() * resortArray.length)];
                    ObePage.resort.selectByValue(Resort);
                    ObePage.chkinmonth.selectByValue(SetMonth(month));
                    ObePage.chkinday.selectByValue(SetDate(date));
                    ObePage.chkinyear.selectByValue(year);
                    ObePage.requote.click();

                }

                   else if(ObePage.NoAirAv===true){
                    Resort=resortArray[Math.floor(Math.random() * resortArray.length)];
                    ObePage.resort.selectByValue(Resort);
                    ObePage.chkinmonth.selectByValue(SetMonth(month));
                    ObePage.chkinday.selectByValue(SetDate(date));
                    ObePage.chkinyear.selectByValue(year);
                    ObePage.btnairRq.click();
                    ObePage.dptcountry.selectByValue('USA');
                    ObePage.dptstate.selectByValue('AZ');
                    ObePage.dptcity.selectByValue('PHX,PHOENIX');
                    ObePage.requote.click();

                } 


                else if (ObePage.AirTable===true){
                    return true;
                    } 

        
            });
      

         

         expect(ObePage.farebutton[0]).to.be.true;
         expect(ObePage.farebutton[1]).to.be.true;




    });



});




