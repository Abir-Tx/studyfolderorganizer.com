/* JS file used to fetch github details to the website mainly to fetch the latest release tag using GitHub API */

// get the elem in which the latest tag will be loaded
var latest_github_release_elem = document.getElementById('latest_github_version');
var latest_github_version;


/* If there is session storage data then load the data/texts from the session else load them directly 
from the API and save them to the session manager */
if (sessionStorage.length > 0) {
	console.log("Loaded from session storage");
	latest_github_release_elem.innerHTML = 'Latest Version: ' + sessionStorage.getItem('latest_version').slice(1, (sessionStorage.getItem('latest_version').length - 1));
}
else {
	console.log("you know it");
	fetch('https://api.github.com/repos/Abir-Tx/StudyFolderOrganizer-GUI/releases')
		.then(res => res.json())
		.then(data => {
			latest_github_version = data[0]['tag_name'];
			latest_github_release_elem.innerHTML = 'Latest Version: ' + latest_github_version;

			// Save to session storage
			sessionStorage.setItem('latest_version', JSON.stringify(latest_github_version));
		})
}