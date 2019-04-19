$(document).ready(function (){
console.log('Yay');

$('#addEmployee').on('submit', function (event) {
    event.preventDefault();

    let entry = {};

    $(this).serializeArray().forEach(function (item) {
        entry[item.name] = item.value;
    });

    $(this).trigger('reset');

    console.log(entry);
    employeeArray.push(entry);
    render();
});




});

let employeeArray = [];

function render(){
    $('.container').empty();
    for (let i = 0; i < employeeArray.length; i++){
        $('.container').append('<div></div>');
        let newDiv = $('.container').children().last();
        let person = employeeArray[i];
        newDiv.append('<p>' + person.firstName + '</p>');
        newDiv.append('<p>' + person.lastName + '</p>');
        newDiv.append('<p>' + person.employeeID + '</p>');
        newDiv.append('<p>' + person.title + '</p>');
        newDiv.append('<p>' + person.annualSalary + '</p>');

    }
}