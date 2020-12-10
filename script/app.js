hello = () => {
  console.log('hello')
}

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyXJke62dzKOSuwk'}).base('appqvc1jKHBIRRbSy');

base('Letters').select({
    maxRecords: 3,
    view: "All people"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });
    fetchNextPage();
}, function done(err) {
    if (err) { console.error(err); return; }
});
// API: keyXJke62dzKOSuwk
// Table ID: appzLKHrRHJbsHoSW
// Full API URL: https://api.airtable.com/v0/appzLKHrRHJbsHoSW/Letters
