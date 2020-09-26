const input = document.querySelector('.overlapped');
const overlapEl = document.querySelector('.overlap');
const imgContainer = document.querySelector('.previews');


function registerImageEvents(element) {
  const btn = element.querySelector('.delete-button');
  btn.addEventListener('click', (e) => {
    const container = e.currentTarget.closest('.preview-container');
    URL.revokeObjectURL(container.querySelector('.preview').src);
    container.remove();
  });
}

function drawPreviewImage(src) {
  const element = document.createElement('div');
  element.classList.add('preview-container');
  element.innerHTML = `<img class="preview" src=${src}>
  <button class="delete-button">X</button>`;
  imgContainer.append(element);
  registerImageEvents(element);
}

overlapEl.addEventListener('click', () => {
  input.value = null;
  input.dispatchEvent(new MouseEvent('click'));
});

input.addEventListener('change', (evt) => {
  const { files } = evt.currentTarget;
  drawPreviewImage(URL.createObjectURL(files[0]));
});
