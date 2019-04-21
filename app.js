
$(document).ready(onReady);

let employeeArray = [];
let monthlyBudget = 20000;

function onReady(){
    render();
    
    $('.container').on('click', '.deleteBtn', clickDeleteButton);
    $('#addEmployee').on('submit', submitEmployee);
}

function clickDeleteButton() {
    let indexForDelete = $(this).parent().data('id'); //I don't remember
    //what this is doing
    employeeArray.splice(indexForDelete, 1);// what is the 1?
    render();
}

function submitEmployee(event){
    event.preventDefault();

    let entry = {};

    $(this).serializeArray().forEach(function(item){
        entry[item.name] = item.value;
    });

    $(this).trigger('reset');

   employeeArray.push(entry);
    
   render();
}

function render(){
    $('.container').empty();
    for (let i = 0; i < employeeArray.length; i++){
        $('.container').append('<div></div>');
        let newDiv = $('.container').children().last();
        newDiv.data('id', i); //no idea
        let person = employeeArray[i];

        newDiv.append('<p class="sideBySide">' + person.firstName + '</p>');
        newDiv.append('<p class="sideBySide">' + person.lastName + '</p>');
        newDiv.append('<p class="sideBySide">' + person.employeeID + '</p>');
        newDiv.append('<p class="sideBySide">' + person.title + '</p>');
        newDiv.append('<p class="sideBySide">' + person.annualSalary + '</p>');
        newDiv.append('<button class="deleteBtn">Delete</button>');


    }
    calculateMonthly(employeeArray);
}

function calculateMonthly() {
    let totalSalary = 0;
    let startingCost = 0;
    for (let i = 0; i < employeeArray.length; i++) {
        let employee = employeeArray[i];
        startingCost = employee.annualSalary / 12;
        totalSalary += startingCost;
        startingCost = parseInt(totalSalary);
    }
    $('#totalMonthly').text('Total Monthly Budget: $' + startingCost);
    if (startingCost > monthlyBudget) {
        $('#body').css('background','red');
    }
};
