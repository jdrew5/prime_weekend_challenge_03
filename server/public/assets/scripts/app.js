// operation variable to track add/subtract/multiply/divide is clicked
var operation = "";

// populateX boolean true. Set to false when operation button is clicked so y input is then appended
var populateX = true;

$(document).ready(function(){

    // set up listeners for all the buttons
    initListeners();

});

// performs ajax call to the server
function processNumbers(operation, formObject) {
    $.ajax({
        type: "POST",
        url: "/" + operation,
        data: formObject,
        beforeSend: function(){
            console.log("HERE IS THE DATA: ", formObject);
        },
        success: function(data){
            console.log(data);
            displayResult(data);
        }
    })
}

function initListeners() {

    // listen for operation buttons
    $("#addButton").on('click', addNumbers);
    $("#subtractButton").on('click', subtractNumbers);
    $("#multiplyButton").on('click', multiplyNumbers);
    $("#divideButton").on('click', divideNumbers);
    $("#clearButton").on('click', clearForm);

    // call to server when equal button is clicked
    $("#equalButton").on('click', function() {
        processNumbers(operation, objectifyForm());
    });

    // set populate x field boolean based on focus
    $("#xInput").focus(function(){
        populateX = true;
    });
    $("#yInput").focus(function(){
        populateX = false;
    });

    // button listeners append to x input before an operation button is clicked.
    // appends to y input after an operation button is clicked.
    $("#button1").on('click', function() {
        if (populateX) {
            appendX("1");
        } else {
            appendY("1");
        }
    });
    $("#button2").on('click', function() {
        if (populateX) {
            appendX("2");
        } else {
            appendY("2");
        }
    });
    $("#button3").on('click', function() {
        if (populateX) {
            appendX("3");
        } else {
            appendY("3");
        }
    });
    $("#button4").on('click', function() {
        if (populateX) {
            appendX("4");
        } else {
            appendY("4");
        }
    });
    $("#button5").on('click', function() {
        if (populateX) {
            appendX("5");
        } else {
            appendY("5");
        }
    });
    $("#button6").on('click', function() {
        if (populateX) {
            appendX("6");
        } else {
            appendY("6");
        }
    });
    $("#button7").on('click', function() {
        if (populateX) {
            appendX("7");
        } else {
            appendY("7");
        }
    });
    $("#button8").on('click', function() {
        if (populateX) {
            appendX("8");
        } else {
            appendY("8");
        }
    });
    $("#button9").on('click', function() {
        if (populateX) {
            appendX("9");
        } else {
            appendY("9");
        }
    });
    $("#button0").on('click', function() {
        if (populateX) {
            appendX("0");
        } else {
            appendY("0");
        }
    });
    $("#buttonDot").on('click', function() {
        if (populateX) {
            appendX(".");
        } else {
            appendY(".");
        }
    });
}

// append number to x input
function appendX(clickedNumber) {
    $("#xInput").val($("#xInput").val() + clickedNumber);
}

// append number to y input
function appendY(clickedNumber) {
    $("#yInput").val($("#yInput").val() + clickedNumber);
}

// operator functions.  Sets global operation variable, toggles input from x to y, highlights clicked operation button
function addNumbers() {
    operation = "add";
    populateX = false;
    highlightButton();
}

function subtractNumbers() {
    operation = "subtract";
    populateX = false;
    highlightButton();
}

function multiplyNumbers() {
    operation = "multiply";
    populateX = false;
    highlightButton();
}

function divideNumbers() {
    operation = "divide";
    populateX = false;
    highlightButton();
}

// function to turn input form into an object.  Returns object.
function objectifyForm() {
    var formObject = {};
    $.each($("#inputForm").serializeArray(), function(i, field){
        formObject[field.name] = field.value;
    });

    return formObject;
}

// DOM functions
function displayResult(result){
    $("#inputForm").find("#result").val(result);
}

function clearForm(){
    $("#inputForm").find("input[type=number]").val("");
    populateX = true;
    operation="";
    highlightButton();
}

function highlightButton() {
    $(".container").find(".highlight-button").removeClass("highlight-button");
    switch(operation) {

        case "add":
            $("#addButton").addClass("highlight-button");
            break;
        case "subtract":
            $("#subtractButton").addClass("highlight-button");
            break;
        case "multiply":
            $("#multiplyButton").addClass("highlight-button");
            break;
        case "divide":
            $("#divideButton").addClass("highlight-button");
            break;

    }
}