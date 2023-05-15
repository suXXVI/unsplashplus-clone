window.onload = function () {
  document.getElementById("sports_btn").click(); 
  document.getElementById("sports_btn").focus(); 
};

function showMe(linkName) {
  const sports = document.getElementById('plus_sports')
  const people = document.getElementById('plus_people')
  const food = document.getElementById('plus_food')
  const nature = document.getElementById('plus_nature')
  const urban = document.getElementById('plus_urban')
  const renders = document.getElementById('plus_renders')
  const business = document.getElementById('plus_business')

  switch (linkName) {
    case 'plus_sports':
      // execute sports function
      document.querySelectorAll('#plus_people, #plus_food, #plus_nature, #plus_urban, #plus_renders, #plus_business').forEach(el => el.style.display = 'none');
      sports.style.display = 'grid';
      break;
    case 'plus_people':
      // execute people function
      document.querySelectorAll('#plus_sports, #plus_food, #plus_nature, #plus_urban, #plus_renders, #plus_business').forEach(el => el.style.display = 'none');
      people.style.display = 'grid';
      break;
    case 'plus_food':
      // execute food function
      document.querySelectorAll('#plus_people, #plus_sports, #plus_nature, #plus_urban, #plus_renders, #plus_business').forEach(el => el.style.display = 'none');
      food.style.display = 'grid';
      break;
    case 'plus_nature':
      // execute nature function
      document.querySelectorAll('#plus_people, #plus_food, #plus_sports, #plus_urban, #plus_renders, #plus_business').forEach(el => el.style.display = 'none');
      nature.style.display = 'grid';
      break;
    case 'plus_urban':
      // execute urban function
      document.querySelectorAll('#plus_people, #plus_food, #plus_nature, #plus_sports, #plus_renders, #plus_business').forEach(el => el.style.display = 'none');
      urban.style.display = 'grid';
      break;
    case 'plus_renders':
      // execute renders function
      document.querySelectorAll('#plus_people, #plus_food, #plus_nature, #plus_urban, #plus_sports, #plus_business').forEach(el => el.style.display = 'none');
      renders.style.display = 'grid';
      break;
    case 'plus_business':
      // execute business function
      document.querySelectorAll('#plus_people, #plus_food, #plus_nature, #plus_urban, #plus_renders, #plus_sports').forEach(el => el.style.display = 'none');
      business.style.display = 'grid';
      break;
    default:
      console.log('Invalid link name.');
  }
}