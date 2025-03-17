
const options = {
	weekday: "long",
	month: "long",
	day: "numeric",
	year: "numeric",
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
	hour12: true,
};

let timeDisplay = document.getElementById("time");

let button = document.getElementById("show-time");

	setInterval(() => {
		
let myDate = new Date();

	let country = document.getElementById("country");
	let changedValue = country.value;
	let arr = {
    india: "Asia/Kolkata",
		us: "America/New_York",
		uk: "Europe/London",
		au: "Australia/Sydney",
		jp: "Asia/Tokyo",
	};
  let finalDate=myDate.toLocaleString("en-Gb",{...options,timeZone:arr[changedValue]})
	timeDisplay.innerHTML = finalDate;
	}, 1000);
  