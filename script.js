document.getElementById('portfolioForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const skills = document.getElementById('skills').value;
    const projects = document.getElementById('projects').value;

    const portfolio = `
        <h2>${name}</h2>
        <h3>Skills:</h3>
        <p>${skills}</p>
        <h3>Projects:</h3>
        <p>${projects}</p>
    `;

    document.getElementById('portfolio').innerHTML = portfolio;
    document.getElementById('portfolioForm').reset();
});
