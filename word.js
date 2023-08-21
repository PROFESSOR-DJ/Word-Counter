// function countWords() {
//     const inputElement = document.getElementById("textInput");
//     const wordCountElement = document.getElementById("wordCount");

//     const inputValue = inputElement.value.trim();
//     const words = inputValue.split(/\s+/);

//     const nonEmptyWords = words.filter(word => word !== "");
//     const wordCount = nonEmptyWords.length;

//     wordCountElement.textContent = `Word count: ${wordCount}`;
// }
function wordCount() {
 var text = document.getElementById("textInput").value;
 var count = 0;
 var split = text.split(' ');
 for (var i = 0; i < split.length; i++) {
  if (split[i] != "") {
   count ++;
  }
 }
 document.getElementById("wordCount").innerHTML = count;
}
