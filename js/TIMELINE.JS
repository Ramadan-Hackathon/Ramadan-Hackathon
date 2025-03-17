
      // Function to show notification for prayer times and suhoor
      function showNotification(message) {
        const notification = new Notification("التقويم الرمضاني", {
          body: message,
          icon: "https://example.com/icon.png", // Add your own icon URL here
        });
      }
      
      // Function to request permission for notifications
      function requestNotificationPermission() {
        if (Notification.permission !== "granted" && Notification && Notification.requestPermission) {
          Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
              showNotification("مرحبا بك في التقويم الرمضاني!");
            }
          });
        }
      }
      
      // Show notification at specific time
      function setupReminders() {
        requestNotificationPermission();
        // Example: Show notification for Fajr prayer time
        setTimeout(() => showNotification("حان وقت الفجر"), 5000);
      }
      
      // Current time display
      function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
        
        setTimeout(updateClock, 1000);
      }
      
      // Countdown to next prayer
      function updateCountdown() {
        // Define prayer times (for demo - replace with actual times)
        const prayers = [
          { name: "الفجر", time: "05:24" },
          { name: "الشروق", time: "06:41" },
          { name: "الظهر", time: "12:45" },
          { name: "العصر", time: "16:11" },
          { name: "المغرب", time: "18:51" },
          { name: "العشاء", time: "20:08" }
        ];
        
        const now = new Date();
        let nextPrayer = null;
        let minDiff = Infinity;
        
        prayers.forEach(prayer => {
          const [pHour, pMinute] = prayer.time.split(':').map(num => parseInt(num));
          const prayerTime = new Date();
          
          prayerTime.setHours(pHour);
          prayerTime.setMinutes(pMinute);
          prayerTime.setSeconds(0);
          
          // If prayer time is in the future today
          let diff = prayerTime - now;
          if (diff > 0 && diff < minDiff) {
            minDiff = diff;
            nextPrayer = { name: prayer.name, time: prayer.time, diff: diff };
          }
        });
        
        // If no prayer time found for today, use first prayer of next day
        if (!nextPrayer) {
          const tomorrow = new Date(now);
          tomorrow.setDate(tomorrow.getDate() + 1);
          tomorrow.setHours(parseInt(prayers[0].time.split(':')[0]));
          tomorrow.setMinutes(parseInt(prayers[0].time.split(':')[1]));
          tomorrow.setSeconds(0);
          
          nextPrayer = {
            name: prayers[0].name, 
            time: prayers[0].time, 
            diff: tomorrow - now
          };
        }
        
        // Calculate hours, minutes, seconds
        const hours = Math.floor(nextPrayer.diff / (1000 * 60 * 60));
        const minutes = Math.floor((nextPrayer.diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((nextPrayer.diff % (1000 * 60)) / 1000);
        
        document.getElementById('next-prayer-name').textContent = nextPrayer.name;
        document.getElementById('next-prayer-time').textContent = nextPrayer.time;
        document.getElementById('countdown').textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        setTimeout(updateCountdown, 1000);
      }
      
      // Highlight today's date
      function highlightToday() {
        const today = new Date();
        const date = today.getDate();
        
        const tables = document.querySelectorAll('.prayer-table tbody');
        tables.forEach(table => {
          const rows = table.querySelectorAll('tr');
          rows.forEach(row => {
            const dateCell = row.querySelector('td:first-child');
            if (dateCell && dateCell.textContent.includes(date.toString())) {
              row.classList.add('bg-accent/20', 'border-2', 'border-gold');
            }
          });
        });
      }
      
      // Initialize everything
      window.onload = function() {
        setupReminders();
        updateClock();
        updateCountdown();
        highlightToday();
      };
    