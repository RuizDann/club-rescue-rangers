var newThingOnPage = document.getElementById("keep");
var feedContainer = document.getElementById("feed-container");

newThingOnPage.addEventListener('change', function() {
	var postComment = newThingOnPage.value;
	console.log(postComment);
})

function generatePostComment(postComment){
	var newPostComment = null;
		// <li>
		// 	<div>
        //         function addProfileName() {
        //             var date = new Date().toLocaleDateString();
        //             var name = document.getElementById("ProfileName").value;

        //         function addProfileName() {
        //             var date = new Date().toLocaleDateString();
        //             var name = document.getElementById("ProfileName").value;

        //         function addPostComment() {
        //             var date = new Date().toLocaleDateString();
        //             var name = document.getElementById("PostComment").value;
		// 	// TITLE : Dale
		// 	// Body: postComment
		// 	</div>
		// </li>
	

	return newPostComment;
	// create new li element
	// create new p element
	// 
}

function subscribeHandler() {
  var btn = document.getElementById("ourBtn");
  var pic = document.getElementById("myProfile");

  if (btn.innerText === "Sign-In" && pic.src.match("myProfile")) {
    btn.classList.replace("bg-green-800", "bg-orange-400");
    btn.classList.replace("hover:bg-green-600", "hover:bg-orange-300");
    btn.innerText = "Sign Out";
    pic.src =
      "https://www.pngall.com/wp-content/uploads/2/Chip-And-Dale-PNG-Image.png";
  } else {
    btn.innerText = "Sign-In";
    btn.classList.replace("bg-orange-400", "bg-green-800");
    btn.classList.replace("hover:bg-orange-300", "hover:bg-green-600");
    pic.src =
      "https://cdn3.vectorstock.com/i/thumb-large/32/12/default-avatar-profile-icon-vector-39013212.jpg";
  }
}

function authHandler() {
    var btn = document.getElementById("ourBtn");
    if (btn.innerText === "Sign-In") {
        btn.classList.replace("bg-green-800", "bg-orange-400");
        btn.classList.replace("hover:bg-green-600", "hover:bg-orange-300");       
        btn.innerText = "Sign Out";
    } else {
        btn.innerText = "Sign-In";
        btn.classList.replace("bg-orange-400", "bg-green-800");
        btn.classList.replace("hover:bg-orange-300", "hover:bg-green-600");
    
    }
}

function changeImage() {
    var pic = document.getElementById("myProfile");
    if (pic.src.match ("myProfile")) {
        pic.src = "https://www.pngall.com/wp-content/uploads/2/Chip-And-Dale-PNG-Image.png";
    } else {
        pic.src = "https://cdn3.vectorstock.com/i/thumb-large/32/12/default-avatar-profile-icon-vector-39013212.jpg";
    }
}