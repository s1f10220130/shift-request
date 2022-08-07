function display_week(){
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var output_month = document.getElementById("first_day_month");
    output_month.textContent = month;
    var day_of_week = [ "日", "月", "火", "水", "木", "金", "土" ] ;
    var js_month = month - 1 ;
    var date = new Date(year, js_month, 1);
    var first_day = document.getElementById("first_day");
    first_day.textContent = day_of_week[date.getDay()]
    var day_of_week_number = date.getDay();
    
}

function display_output(){
    var day = document.getElementById("day").value;
    var day_of_week = document.getElementById("day_of_week");
    day_of_week.textContent = day_of_week[day];
}
