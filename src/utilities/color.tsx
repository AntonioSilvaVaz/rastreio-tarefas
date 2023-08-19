export function changeColor(mood: 'light' | 'dark') {
  if (mood === 'light') {
    document.documentElement.style.setProperty('--backgroundColor', 'white');
    document.documentElement.style.setProperty('--textColor', 'black');
  } else {
    document.documentElement.style.setProperty('--backgroundColor', 'black');
    document.documentElement.style.setProperty('--textColor', 'white');
  }
}