export function changeColor(mood: 'light' | 'dark') {
  if (mood === 'light') {
    document.documentElement.style.setProperty('--backgroundColor', 'white');
    document.documentElement.style.setProperty('--textColor', 'black');
    document.documentElement.style.setProperty('--itemBackgroundColor', 'black');
    document.documentElement.style.setProperty('--itemTextColor', 'white');
  } else {
    document.documentElement.style.setProperty('--backgroundColor', 'black');
    document.documentElement.style.setProperty('--itemBackgroundColor', 'white');
    document.documentElement.style.setProperty('--textColor', 'white');
    document.documentElement.style.setProperty('--itemTextColor', 'black');
  }
}