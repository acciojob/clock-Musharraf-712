//your JS code here. If required.
function startClock(){
	const timer = document.getElementById('timer');

	function updateTime(){
		const now = new Date();
		const date = now.toLocalDateString();
		const time = now.toLocalTimeString();
		timer.textContent = `${date} ${time}`
	}
	updateTime()
	setInterval(updateTime,1000);
}
startClock()