// updates the css variables to the color depending in the mode
export function changeColor(mode: 'light' | 'dark') {
  if (mode === 'light') {
    document.documentElement.style.setProperty('--backgroundColor', 'white');
    document.documentElement.style.setProperty('--textColor', 'black');
    document.documentElement.style.setProperty('--itemBackgroundColor', '#333333');
    document.documentElement.style.setProperty('--itemTextColor', 'white');
  } else {
    document.documentElement.style.setProperty('--backgroundColor', 'black');
    document.documentElement.style.setProperty('--itemBackgroundColor', 'white');
    document.documentElement.style.setProperty('--textColor', 'white');
    document.documentElement.style.setProperty('--itemTextColor', 'black');
  }
}