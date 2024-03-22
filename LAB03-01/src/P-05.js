function sortFruits(fruits) {
	return fruits.sort();
} 

function getElementInTheMiddle(list) {
	return list[list.length / 2];
}

function adminLogin(user) {
	if(user == "ADMIN") return true;
	if(user == "DEV") return true;
	return false;
}