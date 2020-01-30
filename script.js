// Call a function to store data in localStorage
function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
        }
    }
    
// JavaScript function that wraps everything
$(document).ready(function() {
            
    // Select the getCurrentDay id and set the text to this date format
    $("#getCurrentDay").text(moment().format("dddd, MMMM Do"));

        //Call for a loop  
        for (let i=8; i < 17; i++){
        
            // create a row
            // create a div with time starting at 7am and repeat til 5pm
            var row = $(`<div data-time=${i} id='${i}' class="row">`);
    
            // create 3 columns
                
            //create column 1 for time of day 
            var columnOne = $('<div class="col-sm-2"> <p class="hours">' + formatAMPM(i) + '</p>');
    
            //create column 2 for inputing text 
            var columnTwo = $(`<div class="col-sm-8 past"><textarea id=text${i} class="description" placeholder="Add your event here..."></textarea>`);        
    
            //create column 3 for saveButton  
            var columnThree = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fa fa-floppy-o"></i></button>`)
    
            // append columns to row
            row.append(columnOne);
            row.append(columnTwo);
            row.append(columnThree);
    
            // append row to container
            $(".container").append(row);
            getLocalStorage(i);
                
        }
        
    
        // Call a function to format time AM/PM 
        function formatAMPM(hours) {
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12;
            return hours + ampm;
        }

        formatAMPM();

        function colorChange() {
            var currntTime; 
        }
        
        var saveBtn = $('.saveBtn');
        $('.saveBtn').on('click', function(event) {
            event.preventDefault();
            console.log(event);
            let eventId = $(this).attr('id');
            let eventText = $(this).parent().siblings().children('.description').val();
            localStorage.setItem(eventId, eventText);
        });

});
