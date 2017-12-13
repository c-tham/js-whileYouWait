function countDown(day) {
    if (day >= 30) {
        console.log(day+" days until my birthday. Such a long time.... :(");
    } else if (day >= 5 && day < 30) {
        console.log(day+" days until my birthday. Coming very soon :)");
    } else if (day > 1 && day < 5) {
        console.log(day+" DAYS UNTIL MY BIRTHDAY!!!");
    } else if (day == 1) {
        console.log(day+" DAY UNTIL MY BIRTHDAY!!!");
    } else {
        console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
        console.log("♪ღ♪░ H░ A░ P░ P░ Y░  B░ I░ R░ T░ H░ D░ A░ Y░░♪ღ♪");
        console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
    }
}

function daysToDay(days) {
    for (i=days;i>=0;i--) {
        countDown(i);
    }
}

daysToDay(31);