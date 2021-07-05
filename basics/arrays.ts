let breakfast: string[] = [];
let drinks: string[] = [];
let breakfastAnecdote: string = ""

breakfast[0] = "Bread"
breakfast[1] = "Jam"
breakfast.push("Butter")

drinks.push("Tea");
drinks.push("Coffee");
breakfastAnecdote = "My breakfast had " + breakfast.join(', ') + " , " + drinks.join(', ');

console.log(breakfastAnecdote);
console.log(typeof(breakfastAnecdote));
console.log(typeof(breakfast));

