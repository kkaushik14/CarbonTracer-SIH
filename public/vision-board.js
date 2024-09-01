document.addEventListener('DOMContentLoaded', function() {
    const addGoalButton = document.querySelector('.add-goal-button');
    const goalsContainer = document.querySelector('.goals-container');

    function createGoalCard(title, target, progress) {
        const goalCard = document.createElement('div');
        goalCard.className = 'goal-card';

        const goalTitle = document.createElement('h3');
        goalTitle.contentEditable = true;
        goalTitle.textContent = title;

        const goalTarget = document.createElement('p');
        goalTarget.contentEditable = true;
        goalTarget.textContent = target;

        const progressElement = document.createElement('progress');
        progressElement.value = progress;
        progressElement.max = 100;

        const editButton = document.createElement('button');
        editButton.className = 'edit-goal-button';
        editButton.textContent = 'Edit';

        goalCard.appendChild(goalTitle);
        goalCard.appendChild(goalTarget);
        goalCard.appendChild(progressElement);
        goalCard.appendChild(editButton);

        goalsContainer.appendChild(goalCard);
    }

    addGoalButton.addEventListener('click', function() {
        const newTitle = 'New Goal';
        const newTarget = 'Target: Set your goal';
        const newProgress = 0;

        createGoalCard(newTitle, newTarget, newProgress);
    });

    const editButtons = document.querySelectorAll('.edit-goal-button');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const goalCard = button.parentElement;
            const title = goalCard.querySelector('h3').textContent;
            const target = goalCard.querySelector('p').textContent;

            console.log(`Edited Goal: ${title} - ${target}`);
        });
    });
});
