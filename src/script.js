
        function updateScript() {
            const userName = document.getElementById('userName').value || "[User Name]";
            const venue = document.getElementById('venue').value || "<Venue>";
            const location = document.getElementById('location').value || "<Location>";
            const time = document.getElementById('time').value || "<Time>";
            const host = document.getElementById('host').value || "<Host>";

            const script = `Hi, this is ${userName} from the Living Trust Seminar. I am texting to confirm your attendance for the seminar over at ${venue} in ${location} at ${time} tomorrow. ${host} will be your seminar host and looks forward to meeting you! Can you please confirm that you'll be able to attend?`;
            
            document.getElementById('scriptDisplay').value = script;
        }

        function toggleEdit() {
            const area = document.getElementById('scriptDisplay');
            const btn = document.getElementById('editBtn');
            
            if (area.hasAttribute('readonly')) {
                area.removeAttribute('readonly');
                btn.innerText = "Lock Edit";
                area.style.borderStyle = "solid";
            } else {
                area.setAttribute('readonly', true);
                btn.innerText = "Enable Edit";
                area.style.borderStyle = "dashed";
            }
        }

        function copyToClipboard() {
            const area = document.getElementById('scriptDisplay');
            area.select();
            document.execCommand('copy');
            /*alert("Copied to clipboard!");*/
        }

        // Initialize display on load
        updateScript();
