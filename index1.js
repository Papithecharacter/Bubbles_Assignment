const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));

        
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        }

        document.getElementById('dark-mode-toggle').addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
        });
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name');
        document.getElementById('name-display').value = "Welcome "+name;
        
        let originalColors = [];
        let originalPositions = [];

        function generateCirclesAndArrows(numCircles) {
            const containerDiv = document.getElementById('container-div');
            containerDiv.innerHTML = ''; 
            
            for (let i = 1; i <= numCircles; i++) {
                const circleDiv = document.createElement('div');
                circleDiv.classList.add('container');
                
                const circle = document.createElement('div');
                circle.classList.add('circle');
                const color = getRandomColor();
                circle.style.backgroundColor = color;
                originalColors.push(color); 
                circleDiv.appendChild(circle);
                
                const arrow = document.createElement('div');
                arrow.classList.add('arrow');
                arrow.style.left = 'calc(100% + 210px)'; 
                originalPositions.push(arrow.style.left); 
                circleDiv.appendChild(arrow);
                
                const colorPicker = document.createElement('input');
                colorPicker.type = 'color';
                colorPicker.classList.add('color-picker');
                circleDiv.appendChild(colorPicker);
                
                containerDiv.appendChild(circleDiv);
            }
            
            const circles = document.querySelectorAll('.circle');
            circles.forEach((circle, index) => {
                circle.addEventListener('click', () => {
                    const arrow = circle.nextElementSibling;
                    arrow.style.left = '-300px'; 
                    const colorPicker = circle.nextElementSibling.nextElementSibling;
                    circle.style.backgroundColor = colorPicker.value; 
                });
            });
        }

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        document.getElementById('generate-button').addEventListener('click', () => {
            const numCircles = prompt('Enter the number of circles:');
            if (numCircles) {
                generateCirclesAndArrows(parseInt(numCircles));
            }
        });

        document.getElementById('reset-button').addEventListener('click', () => {
            const circles = document.querySelectorAll('.circle');
            const arrows = document.querySelectorAll('.arrow');

            circles.forEach((circle, index) => {
                circle.style.backgroundColor = originalColors[index];
            });
            arrows.forEach((arrow, index) => {
                arrow.style.left = originalPositions[index];
            });

        });

        document.getElementById('home').addEventListener('click', () => {
            window.location.href = 'index.html';
        });