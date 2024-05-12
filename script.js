// 타이머 시작
    const targetDate = new Date('June 14, 2024 05:30:00').getTime();
    const robotaxiDate = new Date('August 8, 2024 09:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector('.event-countdown-time').innerText = `${days} days ${hours} h ${minutes} min ${seconds} sec`;

        if (distance < 0) {
            clearInterval(interval);
            document.querySelector('.event-countdown-time').innerText = '이벤트가 시작되었습니다.';
        }

        // 로보택시 발표일 카운트다운
        const robotaxiDistance = robotaxiDate - now;
        const robotaxiDays = Math.floor(robotaxiDistance / (1000 * 60 * 60 * 24));
        const robotaxiHours = Math.floor((robotaxiDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const robotaxiMinutes = Math.floor((robotaxiDistance % (1000 * 60 * 60)) / (1000 * 60));
        const robotaxiSeconds = Math.floor((robotaxiDistance % (1000 * 60)) / 1000);

        document.querySelector('.robotaxi-countdown-time').innerText = `${robotaxiDays} days ${robotaxiHours} h ${robotaxiMinutes} min ${robotaxiSeconds} sec`;

        if (robotaxiDistance < 0) {
            clearInterval(interval);
            document.querySelector('.robotaxi-countdown-time').innerText = '이벤트가 시작되었습니다.';
        }
    }

    const interval = setInterval(updateCountdown, 1000);