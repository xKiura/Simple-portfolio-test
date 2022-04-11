// Check theme in local storage //

let theme = localStorage.getItem('theme')

if(theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}


// Get IDs from HTML //

let themeDots = document.getElementsByClassName('theme-dot');

for (var i=0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        console.log('option clicked:', mode);
        setTheme(mode);
    })
}


// Setting Theme //

function setTheme(mode) {
    if(mode == 'light') {
        document.getElementById('theme-style').href = 'style.css';
    }

    if(mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css';
    }

    if(mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css';
    }

    if(mode == 'dark') {
        document.getElementById('theme-style').href = 'dark.css';
    }
    // Set theme in storage //
    localStorage.setItem('theme', mode);
}