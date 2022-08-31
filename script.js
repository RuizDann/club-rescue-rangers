var commentBox = document.getElementById("addComment");
var commentPostButton = document.getElementById("addCommentButton");
var feedContainer = document.getElementById("feedContainer");
var signInBtn = document.getElementById("signInBtn");
var profilePic = document.getElementById("myProfile");

signInBtn.addEventListener("click", authHandler);
commentPostButton.addEventListener("click", addPostHandler);

function addPostHandler(){
	var postComment = commentBox.value;
	var newComment = generatePostComment(postComment);
	feedContainer.prepend(newComment);
	commentBox.value = "";
}

function authHandler() {
  var defaultAvatar = "https://cdn3.vectorstock.com/i/thumb-large/32/12/default-avatar-profile-icon-vector-39013212.jpg";
  
  if (signInBtn.innerText === "Sign-In" && profilePic.src === defaultAvatar) {
	  signInBtn.classList.replace("bg-green-800", "bg-orange-400");
	  signInBtn.classList.replace("hover:bg-green-600", "hover:bg-orange-300");
	  signInBtn.innerText = "Sign Out";
    profilePic.src = "https://www.pngall.com/wp-content/uploads/2/Chip-And-Dale-PNG-Image.png";
	} else {
		signInBtn.innerText = "Sign-In";
		signInBtn.classList.replace("bg-orange-400", "bg-green-800");
		signInBtn.classList.replace("hover:bg-orange-300", "hover:bg-green-600");
		profilePic.src = defaultAvatar;
	}
}

function generatePostComment(postComment) {
	var commentContainer = document.createElement("div");
		commentContainer.classList.add("w-full", "rounded", "shadow-lg", "bg-slate-200", "border-2", "border-solid", "border-black");
	var commentAuthor = document.createElement("p");
		commentAuthor.classList.add("font-bold", "text-xl", "pl-4");
		commentAuthor.innerText = "The Dark Knight";
	var commentBody = document.createElement("p");
		commentBody.classList.add("bg-white", "pl-8");
		commentBody.innerText = postComment;
	var commentTime = document.createElement("p");
		commentTime.classList.add("italic", "pl-8", "text-right", "text-sm", "pr-4");
		commentTime.innerText = `Posted On: ${new Date().toDateString("MMM dd, YYYY")}`;
		  commentContainer.prepend(commentAuthor, commentBody, commentTime);
  return commentContainer;
}