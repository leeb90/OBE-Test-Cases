// obe.page.js
var Page = require('./Page')
var ObePage = Object.create(Page, {
    /**
     * define elements
     */
     /*Step1
    */
    resort:     { get: function () { return browser.element('#resortcode'); } },
    chkinmonth: { get: function () { return browser.element('#checkin_month'); } },
    chkinday:   { get: function () { return browser.element('#checkin_day'); } },
    chkinyear:  { get: function () { return browser.element('#checkin_year'); } },
    btnair:     { get: function () { return browser.element('#air_cb_yes'); } },
    dptcountry: { get: function () { return browser.element('#departureCountry'); } },
    dptstate:   { get: function () { return browser.element('#DepartureState'); } },
    dptcity:    { get: function () { return browser.element('#DepartureGateway'); } },
    submit:     { get: function () { return browser.element('.btn.big'); } },
    searcharea:     { get: function () { return browser.element('#air_searchArea'); } },
    farebutton:     { get: function () { return browser.isVisible('#air_searchBy'); } },
    promocodetext:     { get: function () { return browser.element('.moreInfoInput'); } },
    validatecode:     { get: function () { return browser.element('#button_validatePromoCode'); } },
    promocodemessage:     { get: function () { return browser.isVisible('div.red'); } },
    promocodemessagetext:     { get: function () { return browser.getText('div.red'); } },
    groupcodechk:     { get: function () { return browser.element('#groupBookings'); } },
    groupcodetext:     { get: function () { return browser.element('#groupcodeInput'); } },
    groupcodemessage:     { get: function () { return browser.isVisible('.fw_messageboxMessage'); } },
    groupcodemessagetext:     { get: function () { return browser.getText('.fw_messageboxMessage'); } },


    /*Step2
    */

    waitTable:  { get: function () { return browser.element('#flightGroupsTable'); } },
    AirTable:  { get: function () { return browser.isVisible('#flightGroupsTable'); } },
    NoAirMsg:  { get: function () { return browser.isVisible('#airNoShow'); } },
    NoAirAv:  { get: function () { return browser.isVisible('.fw_messageboxMessage'); } },
    btnairRq:     { get: function () { return browser.element('#air_cb'); } },
    requote:     { get: function () { return browser.element('#btnRequote'); } },
    rooms:     { get: function () { return browser.isVisible('.roomSelection'); } },
    Total:     { get: function () { return browser.getText('#summaryTotal'); } },
    FreeRoom:     { get: function () { return browser.isExisting('.hold-message.free_cancel'); } },
    FreeRoomElements:     { get: function () { return browser.elements('.hold-message.free_cancel'); } },
    FreeRoomText:     { get: function () { return browser.getHTML('.hold-message.free_cancel',false); } },
    RoomsCategory :     { get: function () { return browser.elements('p[id^="td"].colB'); } },
    submit2:     { get: function () { return browser.element('#availabilityForm'); } },
    flightnumbertext: { get: function () { return browser.getText('#flightResultsPanel div[style^="margin:10px"]'); } },
    flightnumber: { get: function () { return browser.elements('.flightGroup'); } },
    linktostep1: { get: function () { return browser.element('body > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(1) > td > a'); } },



    /*Step3
    */

    title:      { get: function()  {  return browser.element('#title');    } },
    gender:     { get: function()  {  return browser.element('#gender');   } },
    address:    { get: function()  {  return browser.element('#address');  } },
    firstName:  { get: function()  {  return browser.element('#firstname');} },
    city:       { get: function()  {  return browser.element('#city');} },
    lastName:   { get: function()  {  return browser.element('#lastname');} },
    country:    { get: function()  {  return browser.element('#country');} },
    state:      { get: function()  {  return browser.element('#state');} },
    email:      { get: function()  {  return browser.element('#email');} },
    zip:        { get: function()  {  return browser.element('#zip');} },
    age:        { get: function()  {  return browser.element('#age');} },
    birthMonth: { get: function()  {  return browser.element('#birthMonth');} },
    birthDay:   { get: function()  {  return browser.element('#birthDay');} },
    birthYear:  { get: function()  {  return browser.element('#birthYear');} },
    phone:      { get: function()  {  return browser.element('#phone');} },
    adult1Title:{ get: function()  {  return browser.element('#adult1_title');} },
    adult1Name: { get: function()  {  return browser.element('#adult1_firstname');} },
    adult1LastName:  { get: function()  {  return browser.element('#adult1_lastname');} },
    adult1Gender:    { get: function()  {  return browser.element('#adult1_gender');} },
    adult1BirthMonth:{ get: function()  {  return browser.element('#adult1_birthMonth');} },
    adult1BirthDay:  { get: function()  {  return browser.element('#adult1_birthDay');} },
    adult1BirthYear: { get: function()  {  return browser.element('#adult1_birthYear');} },
    adult1age:       { get: function()  {  return browser.element('#adult1_age');} },
    guestInfoBtn:       { get: function()  {  return browser.element('#continue_next_btn');} },



    //step4
     BalanceDue:       { get: function()  {  return browser.isExisting('#remaining_balance_due_stmt');} },
     BalanceDueText:       { get: function()  {  return browser.getText('#remaining_balance_due_stmt');} },
     InsuranceAgree:       { get: function()  {  return browser.isExisting('.green #insurance_agree');} },
     InsuranceAgreeButton:       { get: function()  {  return browser.element('.green #insurance_agree');} },
     InsuranceMessage:       { get: function()  {  return browser.getText('p.green label');} },
     HoldPayment:          { get: function()  {  return browser.getText('#hold_value');} },
     FullPayment:          { get: function()  {  return browser.getText('#total_subsession');} },
    
});
module.exports = ObePage;