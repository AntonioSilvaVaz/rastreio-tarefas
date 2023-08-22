// updates the css variables to the color depending in the mode
export function changeColor(mode: 'light' | 'dark') {
  if (mode === 'light') {
    document.documentElement.style.setProperty('--backgroundColor', '#FFFFFF');
    document.documentElement.style.setProperty('--textColor', '#000000');
    document.documentElement.style.setProperty('--secondTextColor', '#FFFFFF');
    document.documentElement.style.setProperty('--mainBackgroundColor', '#FFFFFF');
    document.documentElement.style.setProperty('--secondBackgroundColor', '#FFFFFF');
    document.documentElement.style.setProperty('--thirdBackgroundColor', '#000000');
    document.documentElement.style.setProperty('--boxShadow', '#000000');

  } else {
    document.documentElement.style.setProperty('--backgroundColor', 'black');
    document.documentElement.style.setProperty('--textColor', '#FFFFFF');
    document.documentElement.style.setProperty('--secondTextColor', '#000000');
    document.documentElement.style.setProperty('--mainBackgroundColor', '#000000');
    document.documentElement.style.setProperty('--secondBackgroundColor', '#252525');
    document.documentElement.style.setProperty('--thirdBackgroundColor', '#FFFFFF');
    document.documentElement.style.setProperty('--boxShadow', '#FFFFFF');

  }
}