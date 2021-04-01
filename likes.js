function likes(array) {
    if(array.length === 0){
        return 'no one likes this'
    } else if(array.length === 1){
        return `${array[0]} likes this`
    } else if(array.length === 2){
        return `${array[0]} and ${array[1]} like this`
    } else if(array.length === 3){
        return `${array[0]}, ${array[1]} and ${array[2]} like this`
    } else {
        return `${array[0]}, ${array[1]} and ` + (array.length - 2) + ' others like this'
    }
}


///refactor
function likes(names) {
    switch(names.length){
        case 0:
            return 'no one likes this';
        case 1:
            return `${names} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
    }
}