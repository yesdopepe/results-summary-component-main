let reaction, visual, verbal,memory,result;

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    reaction = data.reaction;
    visual = data.visual;
    verbal = data.verbal;
memory = data.memory
    result = Math.round((reaction + memory + verbal + visual) / 4);
document.getElementById("reaction-result").innerHTML = reaction
document.getElementById("memory-result").innerHTML = memory
document.getElementById("verbal-result").innerHTML = verbal
document.getElementById("visual-result").innerHTML = visual
document.getElementById("line").innerHTML = `<h1>${result}</h1>`
  })
  .catch(error => {
    console.error('Error fetching or parsing the JSON file:', error);
  });
