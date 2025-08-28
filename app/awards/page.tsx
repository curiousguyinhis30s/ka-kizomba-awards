'use client';

export default function AwardsPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dance Awards SEA 2025</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(45deg, #1a0033, #4a0080, #7300b3, #9900e6);
            background-size: 400% 400%;
            animation: gradientAnimation 15s ease infinite;
            min-height: 100vh;
            color: white;
        }

        @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            padding: 40px 20px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            margin-bottom: 30px;
        }

        .header h1 {
            font-size: 3em;
            margin-bottom: 10px;
            background: linear-gradient(90deg, #ffd700, #ffed4e);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 3s ease infinite;
        }

        @keyframes shimmer {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
        }

        .header p {
            font-size: 1.2em;
            color: #e0e0e0;
        }

        .countdown {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 30px 0;
        }

        .countdown-item {
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            border-radius: 10px;
            min-width: 80px;
            text-align: center;
        }

        .countdown-item span {
            display: block;
            font-size: 2em;
            font-weight: bold;
            color: #ffd700;
        }

        .countdown-item small {
            font-size: 0.9em;
            color: #e0e0e0;
        }

        .tabs {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }

        .tab-button {
            padding: 12px 24px;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.3);
            color: white;
            cursor: pointer;
            border-radius: 25px;
            transition: all 0.3s;
            font-size: 1em;
        }

        .tab-button:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }

        .tab-button.active {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-color: transparent;
        }

        .tab-content {
            display: none;
            animation: fadeIn 0.5s;
        }

        .tab-content.active {
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .categories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .category-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 20px;
            border-radius: 15px;
            text-align: center;
            transition: transform 0.3s;
        }

        .category-card:hover {
            transform: scale(1.05);
            background: rgba(255, 255, 255, 0.15);
        }

        .category-card h3 {
            margin-bottom: 10px;
            color: #ffd700;
        }

        .vote-section {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 30px;
            border-radius: 20px;
            margin-top: 20px;
        }

        .vote-category {
            margin-bottom: 30px;
        }

        .vote-category h3 {
            color: #ffd700;
            margin-bottom: 15px;
        }

        .nominees {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }

        .nominee {
            background: rgba(255, 255, 255, 0.05);
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s;
            border: 2px solid transparent;
        }

        .nominee:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: #ffd700;
        }

        .nominee.selected {
            background: rgba(255, 215, 0, 0.2);
            border-color: #ffd700;
        }

        .vote-count {
            display: inline-block;
            background: #ffd700;
            color: #1a0033;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 0.9em;
            margin-left: 5px;
        }

        .submit-button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 15px 40px;
            font-size: 1.1em;
            border-radius: 25px;
            cursor: pointer;
            display: block;
            margin: 30px auto 0;
            transition: transform 0.3s;
        }

        .submit-button:hover {
            transform: scale(1.05);
        }

        .results-container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 30px;
            border-radius: 20px;
        }

        .result-category {
            margin-bottom: 30px;
        }

        .result-category h3 {
            color: #ffd700;
            margin-bottom: 15px;
        }

        .result-bar {
            background: rgba(255, 255, 255, 0.1);
            padding: 10px;
            border-radius: 10px;
            margin-bottom: 10px;
        }

        .result-bar-fill {
            background: linear-gradient(90deg, #ffd700, #ffed4e);
            height: 30px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            padding: 0 10px;
            transition: width 0.5s ease;
        }

        .welcome-content {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 40px;
            border-radius: 20px;
            text-align: center;
        }

        .welcome-content h2 {
            color: #ffd700;
            margin-bottom: 20px;
        }

        .welcome-content p {
            font-size: 1.1em;
            line-height: 1.8;
            margin-bottom: 15px;
        }

        .nominate-form {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 30px;
            border-radius: 20px;
            max-width: 600px;
            margin: 0 auto;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #ffd700;
        }

        .form-group input, 
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 10px;
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            background: rgba(255, 255, 255, 0.1);
            color: white;
            font-size: 1em;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 768px) {
            .header h1 {
                font-size: 2em;
            }
            
            .countdown {
                flex-wrap: wrap;
            }
            
            .tabs {
                justify-content: center;
            }
            
            .tab-button {
                font-size: 0.9em;
                padding: 10px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Dance Awards SEA 2025</h1>
            <p>Celebrating Excellence in Southeast Asian Dance Community</p>
            
            <div class="countdown">
                <div class="countdown-item">
                    <span id="days">00</span>
                    <small>Days</small>
                </div>
                <div class="countdown-item">
                    <span id="hours">00</span>
                    <small>Hours</small>
                </div>
                <div class="countdown-item">
                    <span id="minutes">00</span>
                    <small>Minutes</small>
                </div>
                <div class="countdown-item">
                    <span id="seconds">00</span>
                    <small>Seconds</small>
                </div>
            </div>
        </div>

        <div class="tabs">
            <button class="tab-button active" onclick="showTab('welcome')">Welcome</button>
            <button class="tab-button" onclick="showTab('categories')">Categories</button>
            <button class="tab-button" onclick="showTab('nominate')">Nominate</button>
            <button class="tab-button" onclick="showTab('vote')">Vote Now</button>
            <button class="tab-button" onclick="showTab('results')">Results</button>
        </div>

        <div id="welcome" class="tab-content active">
            <div class="welcome-content">
                <h2>Welcome to Dance Awards SEA 2025</h2>
                <p>Join us in celebrating the vibrant dance community across Southeast Asia! This is your opportunity to recognize and honor the talented dancers, instructors, and organizers who make our community extraordinary.</p>
                <p>Cast your votes for your favorite artists in multiple categories including Kizomba, Urban Kiz, Bachata, Salsa, and more. Every vote counts in determining who will be crowned the champions of 2025!</p>
                <p>Voting is now open and will close on March 15, 2025. Winners will be announced at the grand ceremony in Singapore.</p>
                <button class="submit-button" onclick="showTab('vote')">Start Voting</button>
            </div>
        </div>

        <div id="categories" class="tab-content">
            <h2 style="text-align: center; margin-bottom: 30px;">Award Categories</h2>
            <div class="categories-grid">
                <div class="category-card">
                    <h3>Best Kizomba Dancer</h3>
                    <p>Recognizing excellence in traditional Kizomba</p>
                </div>
                <div class="category-card">
                    <h3>Best Urban Kiz Artist</h3>
                    <p>Celebrating innovation in Urban Kiz style</p>
                </div>
                <div class="category-card">
                    <h3>Best Dance Instructor</h3>
                    <p>Honoring exceptional teaching and mentorship</p>
                </div>
                <div class="category-card">
                    <h3>Best DJ</h3>
                    <p>For outstanding musical selection and mixing</p>
                </div>
                <div class="category-card">
                    <h3>Best Event Organizer</h3>
                    <p>Recognizing exceptional event management</p>
                </div>
                <div class="category-card">
                    <h3>Rising Star</h3>
                    <p>Celebrating promising new talent</p>
                </div>
                <div class="category-card">
                    <h3>Best Dance Couple</h3>
                    <p>Honoring exceptional partnership and chemistry</p>
                </div>
                <div class="category-card">
                    <h3>Lifetime Achievement</h3>
                    <p>For lasting contribution to the dance community</p>
                </div>
            </div>
        </div>

        <div id="nominate" class="tab-content">
            <h2 style="text-align: center; margin-bottom: 30px;">Nominate a Candidate</h2>
            <div class="nominate-form">
                <form onsubmit="submitNomination(event)">
                    <div class="form-group">
                        <label for="nominee-name">Nominee Name</label>
                        <input type="text" id="nominee-name" placeholder="Enter nominee's name" required>
                    </div>
                    <div class="form-group">
                        <label for="category">Category</label>
                        <select id="category" required>
                            <option value="">Select a category</option>
                            <option value="kizomba">Best Kizomba Dancer</option>
                            <option value="urbankiz">Best Urban Kiz Artist</option>
                            <option value="instructor">Best Dance Instructor</option>
                            <option value="dj">Best DJ</option>
                            <option value="organizer">Best Event Organizer</option>
                            <option value="rising">Rising Star</option>
                            <option value="couple">Best Dance Couple</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="reason">Why should they win?</label>
                        <textarea id="reason" rows="4" placeholder="Share why you're nominating this person" required></textarea>
                    </div>
                    <div class="form-group">
                        <label for="nominator-email">Your Email</label>
                        <input type="email" id="nominator-email" placeholder="your@email.com" required>
                    </div>
                    <button type="submit" class="submit-button">Submit Nomination</button>
                </form>
            </div>
        </div>

        <div id="vote" class="tab-content">
            <div class="vote-section">
                <h2 style="text-align: center; margin-bottom: 30px;">Cast Your Votes</h2>
                
                <div class="vote-category">
                    <h3>Best Kizomba Dancer</h3>
                    <div class="nominees">
                        <div class="nominee" onclick="toggleVote(this, 'kizomba', 'Carlos Silva')">
                            Carlos Silva <span class="vote-count">124</span>
                        </div>
                        <div class="nominee" onclick="toggleVote(this, 'kizomba', 'Maria Santos')">
                            Maria Santos <span class="vote-count">98</span>
                        </div>
                        <div class="nominee" onclick="toggleVote(this, 'kizomba', 'João Pedro')">
                            João Pedro <span class="vote-count">87</span>
                        </div>
                        <div class="nominee" onclick="toggleVote(this, 'kizomba', 'Ana Lucia')">
                            Ana Lucia <span class="vote-count">76</span>
                        </div>
                    </div>
                </div>

                <div class="vote-category">
                    <h3>Best Urban Kiz Artist</h3>
                    <div class="nominees">
                        <div class="nominee" onclick="toggleVote(this, 'urbankiz', 'Mike Chen')">
                            Mike Chen <span class="vote-count">145</span>
                        </div>
                        <div class="nominee" onclick="toggleVote(this, 'urbankiz', 'Sophie Lee')">
                            Sophie Lee <span class="vote-count">132</span>
                        </div>
                        <div class="nominee" onclick="toggleVote(this, 'urbankiz', 'David Kim')">
                            David Kim <span class="vote-count">99</span>
                        </div>
                        <div class="nominee" onclick="toggleVote(this, 'urbankiz', 'Lisa Wong')">
                            Lisa Wong <span class="vote-count">88</span>
                        </div>
                    </div>
                </div>

                <div class="vote-category">
                    <h3>Best Dance Instructor</h3>
                    <div class="nominees">
                        <div class="nominee" onclick="toggleVote(this, 'instructor', 'Roberto Mendes')">
                            Roberto Mendes <span class="vote-count">201</span>
                        </div>
                        <div class="nominee" onclick="toggleVote(this, 'instructor', 'Isabella Cruz')">
                            Isabella Cruz <span class="vote-count">178</span>
                        </div>
                        <div class="nominee" onclick="toggleVote(this, 'instructor', 'James Park')">
                            James Park <span class="vote-count">156</span>
                        </div>
                        <div class="nominee" onclick="toggleVote(this, 'instructor', 'Nina Patel')">
                            Nina Patel <span class="vote-count">134</span>
                        </div>
                    </div>
                </div>

                <button class="submit-button" onclick="submitVotes()">Submit Votes</button>
            </div>
        </div>

        <div id="results" class="tab-content">
            <div class="results-container">
                <h2 style="text-align: center; margin-bottom: 30px;">Live Results</h2>
                
                <div class="result-category">
                    <h3>Best Kizomba Dancer</h3>
                    <div class="result-bar">
                        <div class="result-bar-fill" style="width: 35%;">
                            Carlos Silva - 35%
                        </div>
                    </div>
                    <div class="result-bar">
                        <div class="result-bar-fill" style="width: 28%;">
                            Maria Santos - 28%
                        </div>
                    </div>
                    <div class="result-bar">
                        <div class="result-bar-fill" style="width: 22%;">
                            João Pedro - 22%
                        </div>
                    </div>
                    <div class="result-bar">
                        <div class="result-bar-fill" style="width: 15%;">
                            Ana Lucia - 15%
                        </div>
                    </div>
                </div>

                <div class="result-category">
                    <h3>Best Urban Kiz Artist</h3>
                    <div class="result-bar">
                        <div class="result-bar-fill" style="width: 32%;">
                            Mike Chen - 32%
                        </div>
                    </div>
                    <div class="result-bar">
                        <div class="result-bar-fill" style="width: 29%;">
                            Sophie Lee - 29%
                        </div>
                    </div>
                    <div class="result-bar">
                        <div class="result-bar-fill" style="width: 24%;">
                            David Kim - 24%
                        </div>
                    </div>
                    <div class="result-bar">
                        <div class="result-bar-fill" style="width: 15%;">
                            Lisa Wong - 15%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Countdown Timer
        function updateCountdown() {
            const targetDate = new Date('March 15, 2025 00:00:00').getTime();
            const now = new Date().getTime();
            const difference = targetDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();

        // Tab functionality
        function showTab(tabName) {
            const tabs = document.querySelectorAll('.tab-content');
            const buttons = document.querySelectorAll('.tab-button');
            
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            
            buttons.forEach(button => {
                button.classList.remove('active');
            });
            
            document.getElementById(tabName).classList.add('active');
            event.target.classList.add('active');
        }

        // Voting functionality
        const votes = {};

        function toggleVote(element, category, nominee) {
            const categoryVotes = votes[category] || [];
            const index = categoryVotes.indexOf(nominee);
            
            if (index > -1) {
                categoryVotes.splice(index, 1);
                element.classList.remove('selected');
            } else {
                // Remove previous selection in same category
                const parent = element.parentElement;
                parent.querySelectorAll('.nominee').forEach(n => {
                    n.classList.remove('selected');
                });
                
                votes[category] = [nominee];
                element.classList.add('selected');
                
                // Update vote count
                const voteCount = element.querySelector('.vote-count');
                if (voteCount) {
                    const currentCount = parseInt(voteCount.textContent);
                    voteCount.textContent = currentCount + 1;
                }
            }
        }

        function submitVotes() {
            // Save votes to localStorage
            localStorage.setItem('danceAwardsVotes', JSON.stringify(votes));
            alert('Thank you for voting! Your votes have been submitted.');
            
            // Clear selections
            document.querySelectorAll('.nominee.selected').forEach(n => {
                n.classList.remove('selected');
            });
            
            // Switch to results tab
            showTab('results');
        }

        function submitNomination(event) {
            event.preventDefault();
            
            const nomination = {
                name: document.getElementById('nominee-name').value,
                category: document.getElementById('category').value,
                reason: document.getElementById('reason').value,
                email: document.getElementById('nominator-email').value
            };
            
            // Save nomination to localStorage
            const nominations = JSON.parse(localStorage.getItem('danceAwardsNominations') || '[]');
            nominations.push(nomination);
            localStorage.setItem('danceAwardsNominations', JSON.stringify(nominations));
            
            alert('Thank you! Your nomination has been submitted successfully.');
            event.target.reset();
        }

        // Load saved votes on page load
        window.addEventListener('load', () => {
            const savedVotes = localStorage.getItem('danceAwardsVotes');
            if (savedVotes) {
                Object.assign(votes, JSON.parse(savedVotes));
            }
        });
    </script>
</body>
</html>
    ` }} />
  );
}