//your JS code here. If required.
function startClock(){
	const timer = document.getElementById('timer');

	function updateTime(){
		const now = new Date();
		const date = now.toLocaleDateString();
		const time = now.toLocaleTimeString();
		timer.textContent = `${date} ${time}`
	}
	updateTime()
	setInterval(updateTime,1000);
}
startClock()