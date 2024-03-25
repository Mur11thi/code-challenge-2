"Enter Student Marks" //prompt message to user
let studentMarks = "x"
studentMarks= (undefined) //is where user reassigns studentMarks variable with his/her grade
if(studentMarks > 79 && studentMarks <= 100){
    return ("You have an A grade")
} else if( studentMarks >= 60 && studentMarks <=79){
    return ("You have a B grade")
}else if(studentMarks >= 49 && studentMarks <=59){
    return("You have a C grade")
}else if( studentMarks >= 40 && studentMarks<=49){
    return ("You have a D grade")
}else if( studentMarks > 0 && studentMarks < 40 ){
    return ( "You have an E grade")
}

