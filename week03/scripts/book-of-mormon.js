document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');    

    let chaptersArray = getChapterList() || [];
    chaptersArray.forEach(chapter => {
        displayList(chapter);
      });

      button.addEventListener('click', () => {
        if (input.value != '') {  // make sure the input is not empty
          displayList(input.value); // call the function that outputs the submitted chapter
          chaptersArray.push(input.value);  // add the chapter to the array
          setChapterList(); // update the localStorage with the new array
          input.value = ''; // clear the input
          input.focus(); // set the focus back to the input
        }
      });

      function displayList(item) {
        let li = document.createElement('li');
        let deletebutton = document.createElement('button');
        li.textContent = item; // note the use of the displayList parameter 'item'
        deletebutton.textContent = '❌';
        deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
        li.append(deletebutton);
        list.append(li);
        deletebutton.addEventListener('click', function () {
          list.removeChild(li);
          deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
          input.focus(); // set the focus back to the input
        });
        console.log('I like to copy code instead of typing it out myself and trying to understand it.');
      }

      function setChapterList() {
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
      }

      function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMList'));
      }

      chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
      chaptersArray = chaptersArray.filter((item) => item !== chapter);

      function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1);
        chaptersArray = chaptersArray.filter(item => item !== chapter);
        setChapterList();
      }

});
