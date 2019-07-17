window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const projects = [
        {
            id: 1,
            description: "Projeto 01",
            steps: [
                {
                    date: new Date(2019, 06, 01),
                    description: "Solicitação de documentos",
                    note: `Cartório refere-se a uma repartição pública ou privada que tem a custódia de documentos ("cartas") e que lhes dá fé pública.

                    A palavra "cartório" deriva do latim charta ("papel", "mensagem", "texto"), mais o sufixo derivado de orius, aqui como formador de substantivos, e significa em sua origem "aquele que lida com papéis".`
                },
                {
                    date: new Date(2019, 06, 04),
                    description: "Segunda etapa",
                    note: `Ofício de Registro de Imóveis no Brasil e registo predial em Portugal é o órgão de delegação estatal em que é feito o registro da propriedade imóvel.`
                },
                {
                    date: new Date(2019, 06, 10),
                    description: "Terceira etapa",
                    note: `Instituição financeira é uma organização cuja finalidade é otimizar a alocação de capitais financeiros próprios e/ou de terceiros, obedecendo uma correlação de risco, custo e prazo[1] que atenda aos objetivos dos seus patrocinadores (no sentido da palavra inglesa stakeholder), incluindo pessoas físicas ou jurídicas que tenham interesses em sua operação como acionistas, clientes, colaboradores, Cooperados, fornecedores, agências reguladoras do mercado onde a organização opere.`
                },
                {
                    date: new Date(2019, 06, 15),
                    description: "Quase lá",
                    note: ""
                },
            ]
        },
        {
            id: 2,
            description: "Projeto 02",
            steps: []
        },
        {
            id: 3,
            description: "Projeto 03",
            steps: [
                {
                    date: new Date(2019, 06, 04),
                    description: "Testando quando tem apenas 1 etapa",
                    note: `Uma startup é uma empresa emergente que tem como objetivo desenvolver ou aprimorar um modelo de negócio, preferencialmente escalável e repetível. Uma startup é uma empresa recém-criada ainda em fase de desenvolvimento que é normalmente de base tecnológica. O termo tornou-se popular internacionalmente durante a bolha da internet, quando um grande número de "empresas.com" foram fundadas. Por isso, comumente se relaciona o termo startup com tecnologia, mas qualquer empresa que nasce em qualquer segmento, seja tradicional ou inovador é uma startup (uma empresa que nasce).`
                },
            ]
        },
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    const project = projects.filter(p => p.id == projectId)[0];
    console.log(project);

    document.querySelector('#projectDescription').innerText = project.description;

    if (project.steps.length == 0) {
        project.steps.push({
                date: new Date(),
                description: "",
                note: "Nenhuma etapa informada"
            });
    }

    project.steps
    .sort((a, b) => b.date.getDate() - a.date.getDate())
    .forEach((step, index) => {
        const container = document.createElement('div');
        container.classList.add('container');
        if (index % 2 == 0) {
            container.classList.add('left');
        } else {
            container.classList.add('right');
        }

        const content = document.createElement('div');
        content.classList.add('content');

        const day = step.date.getDate().toString().padStart(2, '0');
        const month = (step.date.getMonth() + 1).toString().padStart(2, '0');
        const year = step.date.getFullYear();

        content.innerHTML = `<h2>${day}/${month}/${year}</h2>
        <p>${step.description}</p>
        <small>${step.note}</small>
        `;

        container.appendChild(content);
        document.querySelector('.timeline').appendChild(container);
    });
});