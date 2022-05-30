var name2, inquiry;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('make_inquiry').addEventListener('click', (event) => {
  name2 = getNumberOrString(document.getElementById('name').value);
  inquiry = getNumberOrString(document.getElementById('inquiry').value);
  let element_previous_comment = document.getElementById('previous_comment');
  let new_li = document.createElement('li');
  new_li.innerText = name2;
  let new_ol = document.createElement('ol');
  new_ol.innerText = inquiry;

  new_li.appendChild(new_ol);

  element_previous_comment.appendChild(new_li);

});