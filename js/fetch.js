/* JS file used to fetch github details to the website mainly to fetch the latest release tag using GitHub API */

// get the elem in which the latest tag will be loaded
var latest_github_release = document.getElementById('latest_github_version');
console.log(latest_github_release.innerHTML);

fetch('https://api.github.com/repos/Abir-Tx/StudyFolderOrganizer-GUI/releases')
	.then(res => res.json())
	.then(data => {
		latest_github_release.innerHTML = 'Latest Version: ' + data[0]['tag_name'];
	})