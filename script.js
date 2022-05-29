var name2, comment;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('add_comment').addEventListener('click', (event) => {
  name2 = getNumberOrString(document.getElementById('name').value);
  comment = getNumberOrString(document.getElementById('comment').value);
  let element_your_comment = document.getElementById('your_comment');
  let new_li = document.createElement('li');
  new_li.innerText = name2;
  let new_ol = document.createElement('ol');
  new_ol.innerText = comment;

  new_li.appendChild(new_ol);

  element_your_comment.appendChild(new_li);

});