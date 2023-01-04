let grades = [[20, 10], [15, 20], [13, 18]];
let average = 0;
let sum = 0;
let totalNotesNumber = 0;
for (let i = 0; i < grades.length; i++)
{
    
    for (notes of grades[i]) 
    {
        sum = (sum + notes);
    }
    
    totalNotesNumber = totalNotesNumber + grades[i].length;
    average = (sum / totalNotesNumber);
    console.log(average);
}


/*

average = (0 + 20) / 2 => 10
average = (10 + 10) / 2 => 10
average = (10 + 15) / 2 => 12.5
average = (12.5 + 20) / 2 => 16.25
average = (16.25 + 13) / 2 => 14.625
average = (14.625 + 18) / 2 => 16.3125
*/